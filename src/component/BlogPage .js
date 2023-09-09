// import React from 'react';
// import ShareOption from './ShareOption';

// const BlogPage = () => {
//   const url = window.location.href;
//   const image = 'https://images.pexels.com/photos/42257/flowerful-flowery-flowerly-42257.jpeg';
//   const title = 'Your Blog Title';
//   const description = 'Your Blog Description';

//   return (
//     <div>
//       {/* Your blog content goes here */}
//       <ShareOption
//         url={url}
//         image={image}
//         title={title}
//         description={description}
//       />
//     </div>
//   );
// };

// export default BlogPage;



import React from 'react';
import ShareButton from './ShareButton';

const BlogPage = () => {
  const blogData = {
    title: 'Share Option',
    description: 'Your Page Description',
    url: window.location.href,
    image: 'https://images.pexels.com/photos/42257/flowerful-flowery-flowerly-42257.jpeg',
  };

  return (
    <div>
      <h1>{blogData.title}</h1>
      <p>{blogData.description}</p>
      <img src={blogData.image} alt={blogData.title} style={{ height: 100, width: 100 }} />
      <ShareButton {...blogData} />
    </div>
  );
};

export default BlogPage;