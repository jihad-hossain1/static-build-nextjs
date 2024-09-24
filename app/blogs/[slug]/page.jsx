import React from 'react'


// export async function generateStaticParams() {
//     return [
//         { slug: 'hello' },
//         { slug: 'world' },
//     ]
// }

export async function generateStaticParams() {
    const res = await fetch(
      `https://api.discoverinternationalmedicalservice.com/api/get/doctors`
    );
    const data = await res.json();
    return data?.response?.data?.map((item) => ({
      slug: item?.slug,
    }));
  }


const BlogPage = ({ params }) => {
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage