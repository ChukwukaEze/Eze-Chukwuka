export const NotFound = (condition, filterValues) => {
  return (
    condition && (
      <p style={{ lineHeight: "2rem" }}>
        No Projects Found At this Minute! <br /> Chukwuka may be working on a
        project similar to your query - <b>{filterValues}</b>, as there are other
        projects not listed here. Confirm from him on WhatsApp.{" "}
        <a rel="noreferrer" href="https://wa.link/7j9t00" target="_blank">
          Confirm Now!
        </a>
      </p>
    )
  );
};
