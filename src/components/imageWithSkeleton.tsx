import Skeleton from 'react-loading-skeleton';
import { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  height?: string | number;
  width?: string | number;
  className?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, height, width, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={className} style={{ position: 'relative', display: 'inline-block' }}>
      {loading && (
        <Skeleton height={height} width={width} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#E0E0E0' }} />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        style={{
          transition: 'opacity 0.3s',
          opacity: loading ? 0 : 1,
          width,
          height,
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;
