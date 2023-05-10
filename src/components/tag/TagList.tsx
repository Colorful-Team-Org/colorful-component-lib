import Pill from './Pill';

type Props = {
  items: { id: string; name: string }[];
};
export default function TagList(props: Props) {
  return (
    <div className="flex">
      {props.items.map(item => (
        <Pill key={item.id} className="mr-4 last:mr-0">
          {item.name}
        </Pill>
      ))}
    </div>
  );
}
