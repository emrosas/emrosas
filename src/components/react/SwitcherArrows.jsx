function SwitcherArrows({ onClickPrevious, onClickNext }) {
  return (
      <div className='absolute px-4 bottom-[18px] flex items-center justify-between w-full gap-4'>
        <button className="px-16 py-2 rounded-md bg-brand-1 hover:-translate-y-[2px] transition-all duration-200 shadow-sm hover:shadow-highlight" onClick={onClickPrevious}>←</button>
        <button className="px-16 py-2 rounded-md bg-brand-1 hover:-translate-y-[2px] transition-all duration-200 shadow-sm hover:shadow-highlight" onClick={onClickNext}>→</button>
      </div>
  );
}

export default SwitcherArrows;
