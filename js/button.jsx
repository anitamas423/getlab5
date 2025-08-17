import { ArrowRightIcon } from '@heroicons/react/24/solid';

function MyButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
      Continue
      <ArrowRightIcon className="w-5 h-5" />
    </button>
  );
}

export default MyButton;