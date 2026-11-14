
"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = [
  "#D9A441",
  "#4F8CFF",
  "#55B987",
  "#D66B6B",
  "#9B7BEA",
  "#D78A45",
];

function ChartCard({ title, children }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-[#222222] p-4 sm:p-6">
      <h2 className="mb-6 text-lg font-semibold sm:text-xl">
        {title}
      </h2>

      {children}
    </div>
  );
}

function EmptyChart({ message }) {
  return (
    <div className="flex h-[280px] items-center justify-center text-center text-sm text-white/40">
      {message}
    </div>
  );
}

export default function StatisticsCharts({
  categories = [],
  genres = [],
}) {
  const hasCategories = categories.length > 0;
  const hasGenres = genres.length > 0;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        

      {/* CATEGORY DONUT CHART */}
      <ChartCard title="Category Distribution">
        {hasCategories ? (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categories}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  innerRadius="55%"
                  outerRadius="80%"
                  paddingAngle={4}
                  stroke="none"
                >
                  {categories.map((item, index) => (
                    <Cell
                      key={item.name}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#181818",
                    border: "1px solid #444",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  formatter={(value, name) => [
                    value,
                    name,
                  ]}
                />

                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-xs text-white/70 sm:text-sm">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <EmptyChart message="No category data available yet." />
        )}
      </ChartCard>

      {/* GENRE VERTICAL BAR CHART */}
      <ChartCard title="Top 15 Genre Distribution">
        {hasGenres ? (
          <div className="h-[340px] w-full sm:h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={genres}
                margin={{
                  top: 15,
                  right: 10,
                  left: -15,
                  bottom: 65,
                }}
              >
                <CartesianGrid
                  stroke="#ffffff12"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  interval={0}
                  angle={-60}
                  textAnchor="end"
                  height={75}
                  tick={{
                    fill: "#ccc",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  type="number"
                  allowDecimals={false}
                  width={35}
                  tick={{
                    fill: "#999",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  cursor={{
                    fill: "#ffffff08",
                  }}
                  contentStyle={{
                    backgroundColor: "#181818",
                    border: "1px solid #444",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />

                <Bar
                  dataKey="value"
                  name="Titles"
                  fill="#D9A441"
                  radius={[5, 5, 0, 0]}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <EmptyChart message="No genre data available yet." />
        )}
      </ChartCard>

    </div>
  );
}
