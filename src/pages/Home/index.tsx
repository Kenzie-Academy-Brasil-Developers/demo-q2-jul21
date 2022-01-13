import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
}

interface FormData {
  repo: string;
}

const formSchema = yup.object().shape({
  repo: yup.string().required("Repo obrigatório"),
});

const Home = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const toast = useToast();

  const handleAddRepository = async ({ repo }: FormData) => {
    try {
      const response = await api.get<Repository>(`/repos/${repo}`);

      setRepositories([...repositories, response.data]);
    } catch {
      toast({
        title: "Erro na busca do repositório",
        description:
          "Verifique se o repositório foi escrito de maneira correta",
        status: "error",
      });
    }
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      p="8"
      bg="gray.900"
      justify="center"
      flexDir="column"
    >
      <Heading as="h1" size="xl" mb="8">
        Pesquise um repositório
      </Heading>
      <Flex
        bg="gray.700"
        as="form"
        w="100%"
        maxW="1100px"
        p="8"
        borderRadius="md"
        flexDir="column"
        onSubmit={handleSubmit(handleAddRepository)}
      >
        <Input
          label="Repositório"
          placeholder="Ex: facebook/react"
          {...register("repo")}
          error={errors.repo?.message}
        />
        <Button
          type="submit"
          mt={6}
          size="lg"
          bg="#3f5efb"
          _hover={{
            bg: "blue.500",
          }}
        >
          Buscar
        </Button>
      </Flex>

      {repositories.map((repo) => (
        <Flex
          mt="4"
          w="100%"
          bgGradient="linear(to-r, #8a2539, #3f5efb)"
          maxW="1100px"
          p="8"
          borderRadius="md"
        >
          <Box>
            <Flex>
              <Image
                mb="2"
                w="50px"
                h="50px"
                borderRadius="50%"
                src={repo.owner.avatar_url}
              />
              <Heading as="h3" size="lg" ml="4" mt="1">
                {repo.full_name}
              </Heading>
            </Flex>
            <Text>{repo.description}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Home;
