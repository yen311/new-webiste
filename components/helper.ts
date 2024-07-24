export const s3baseUrl = 'https://yenwebsitebucket83ca8-dev.s3.ap-southeast-2.amazonaws.com';

export const extractImageData = (htmlString: string) => {
    // Parse the HTML string into a DOM Document
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Get all img elements
    const imgElements = doc.querySelectorAll('img');

    // Extract the type and base64 data from each img element
    const imgData = Array.from(imgElements).map(img => {
        const src = img.src;
        return { src, "self": img };
        // if (src.startsWith('data:')) {
        //     // const [typeInfo, base64Data] = src.split(';base64,');
        //     // const type = typeInfo.split(':')[1];
        //     return { src, "self": img };
        // } else {
        //     return null; // If it's not a base64 data URL, return null or handle as needed
        // }
    }).filter(data => data !== null); // Filter out null values if any

    return imgData;
}