import React from "react";
import { ReactComponent as BiStar } from "assets/bi-star.svg";
import { ReactComponent as BiStarFill } from "assets/bi-star-fill.svg";
import classNames from "classnames";

interface DifficultyStarsProps {
  difficulty: number;
}

export function DifficultyStars({ difficulty }: DifficultyStarsProps) {
  const classSecondStarFill = classNames({
    "d-inline-block": difficulty > 1,
    "d-none": difficulty < 2,
  });

  const classSecondStar = classNames({
    "d-inline-block": difficulty < 2,
    "d-none": difficulty > 1,
  });

  const classThirdStarFill = classNames({
    "d-inline-block": difficulty > 2,
    "d-none": difficulty < 3,
  });

  const classThirdStar = classNames({
    "d-inline-block": difficulty < 3,
    "d-none": difficulty > 2,
  });

  const classFourthStarFill = classNames({
    "d-inline-block": difficulty > 3,
    "d-none": difficulty < 4,
  });

  const classFourthStar = classNames({
    "d-inline-block": difficulty < 4,
    "d-none": difficulty > 3,
  });

  const classFifthStarFill = classNames({
    "d-inline-block": difficulty > 4,
    "d-none": difficulty < 5,
  });

  const classFifthStar = classNames({
    "d-inline-block": difficulty < 5,
    "d-none": difficulty > 4,
  });
  return (
    <div>
      <BiStarFill className="d-inline-block" />
      <BiStarFill className={classSecondStarFill} />
      <BiStar className={classSecondStar} />
      <BiStarFill className={classThirdStarFill} />
      <BiStar className={classThirdStar} />
      <BiStarFill className={classFourthStarFill} />
      <BiStar className={classFourthStar} />
      <BiStarFill className={classFifthStarFill} />
      <BiStar className={classFifthStar} />
    </div>
  );
}
