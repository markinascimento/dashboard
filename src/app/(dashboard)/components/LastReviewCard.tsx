// -> Types
interface ILastReviewCardProps {
  note: number;
  name: string;
}

export function LastReviewCard({ note, name }: ILastReviewCardProps) {
  return (
    <div className="flex items-center justify-evenly bg-royal-blue-100 p-2 rounded-2xl">
      <div className="flex items-center justify-center w-9 h-9 bg-royal-blue-500 rounded-full">
        <strong className="text-white"> {note} </strong>
      </div>

      <strong> {name} </strong>

      <button className="bg-royal-blue-500 px-4 py-1 rounded-full">
        <strong className="text-white text-sm tracking-[2px]">
          FULL REVIEW
        </strong>
      </button>
    </div>
  );
}
