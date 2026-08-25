function Statistics({ title, stats }) {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {stats.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;
