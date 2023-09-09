// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import cheerio from 'cheerio';

// function ShareOption({ url }) {
//     const [copied, setCopied] = useState(false);
//     const [data, setData] = useState({
//         image: 'Thomas Carlyle',
//         title: 'Welcome to Wikipedia,',
//         description: ' South Carolina Gamecocks head coach Will Muschamp told Jalin Hyatt',
//         ogImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Thomas_Carlyle_lm.jpg/800px-Thomas_Carlyle_lm.jpg',
//     });

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get(url);
//                 const html = response.data;
//                 const $ = cheerio.load(html);

//                 const image = $('https://images.pexels.com/photos/42257/flowerful-flowery-flowerly-42257.jpeg').attr('src');
//                 const pageTitle = $('title').text();
//                 const metaDescription = $('meta[name="description"]').attr('content');
//                 const ogImageURL = $('meta[property="https://images.pexels.com/photos/42257/flowerful-flowery-flowerly-42257.jpeg"]').attr('content');

//                 setData({ image, title: pageTitle, description: metaDescription, ogImage: ogImageURL });
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }

//         fetchData();
//     }, [url]);

//     const handleCopy = () => {
//         const textToCopy = `URL: ${url}\nTitle: ${data.title}\nDescription: ${data.description}\nImage: ${data.image}`;

//         navigator.clipboard.writeText(textToCopy).then(() => {
//             setCopied(true);
//         });
//     };

//     return (
//         <div>

//             <p>{data.title}</p>
//             <p>{data.description}</p>
//             <img src={data.ogImage} alt="OG Image" style={{ height: 50, width: 50 }} />

//             <button onClick={handleCopy}>
//                 {copied ? 'Copied!' : 'Copy All Info'}
//             </button>
//         </div>
//     );
// }



// export default ShareOption;


// // <h2>Share Option</h2>
// // <img src={data.image} alt="Webpage" style={{ height: 50, width: 50 }} />
