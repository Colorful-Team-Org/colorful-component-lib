import clsx from 'clsx';
import Image, { ImageProps } from './Image';

type Props = {
  name: string;
  role?: string | null;
  image: ImageProps;
  className?: string;
};
export default function Author(props: Props) {
  return (
    <div className={clsx('inline-flex min-w-[14rem]', props.className)}>
      <Image className="w-11 h-11 rounded-full" loadingSkeleton {...props.image} />
      <div className="ml-3">
        <p className="font-medium text-gray-700">{props.name}</p>
        {props.role && <p className="text-gray-500">{props.role}</p>}
      </div>
    </div>
  );
}
