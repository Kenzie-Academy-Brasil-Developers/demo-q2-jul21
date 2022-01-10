import { CanvasHTMLAttributes } from "react";

interface CardProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  user: User;
}

interface User {
  name: string;
  lastName: string;
  age: number;
}

const Card = ({ user, ...rest }: CardProps) => {
  console.log(rest);

  return (
    <canvas>
      <h3>
        {user.name} - {user.lastName}
      </h3>
    </canvas>
  );
};

export default Card;
