import React from "react";

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
