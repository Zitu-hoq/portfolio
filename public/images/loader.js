export default function myImageLoader({ src, width, height }) {
    return `https://ik.imagekit.io/digitalimages/portfolio/${src}?tr=w-${width},h-${height}`
  }