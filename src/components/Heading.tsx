import React from "react";

type HeadingProps = {
  title: string
}

export const Heading = ({ title }: HeadingProps) => {

  return (
    <div className="heading">
      <h2 className="title-leading">Hello, { title }</h2>
      <hr/>
    </div>
  );
};