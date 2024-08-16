// -> Types
interface ILastReviewCardProps {
  note: number;
  name: string;
}

export function LastReviewCard({ note, name }: ILastReviewCardProps) {
  return (
    <div className="flex items-center justify-between bg-royal-blue-100 p-2 rounded-2xl gap-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center min-w-9 min-h-9 bg-royal-blue-500 rounded-full">
          <strong className="text-white"> {note} </strong>
        </div>

        <strong className="text-sm"> {name} </strong>
      </div>

      <button className="bg-royal-blue-500 px-4 py-1 rounded-full">
        <strong className="text-white text-sm tracking-[2px]">
          FULL REVIEW
        </strong>
      </button>
    </div>
  );
}
