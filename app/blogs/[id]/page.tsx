import React from "react";

export const runtime = "edge";

interface Props {
  params: { id: string };
}

const BlogDetailPage: React.FC<Props> = ({
  params,
}: {
  params: { id: string };
}) => {
  return <div>{params.id} Blog Detail</div>;
};

export default BlogDetailPage;
