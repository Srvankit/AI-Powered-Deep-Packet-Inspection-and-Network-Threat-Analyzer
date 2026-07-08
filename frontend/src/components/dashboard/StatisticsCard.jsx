function StatisticsCard({ title, value, color }) {
  return (
    <div
      className={`${color}
      rounded-2xl
      shadow-lg
      border
      border-slate-700
      p-6
      hover:scale-105
      transition-all
      duration-300`}
    >
      <p className="text-slate-300 text-sm font-medium">
        {title}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}

export default StatisticsCard;