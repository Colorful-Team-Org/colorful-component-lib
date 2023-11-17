import clsx from 'clsx';
import Image, { ImageProps } from '../image/Image';

export type AuthorProps = {
  name: string;
  role?: string | null;
  image: Omit<ImageProps, 'sizes'>;
  className?: string;
};
export default function AuthorCard(props: AuthorProps) {
  return (
    <div className={clsx('inline-flex min-w-[14rem] font-sans', props.className)}>
      <Image className="h-11 w-11 rounded-full" loadingSkeleton {...props.image} sizes="100px" />
      <div className="ml-3">
        <p className="font-medium text-gray-700">{props.name}</p>
        {props.role && <p className="text-gray-500">{props.role}</p>}
      </div>
    </div>
  );
}
