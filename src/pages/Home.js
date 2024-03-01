const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--accent-color)',
  },
  title: {
    width: 400,
    fontWeight: 500,
    fontFamily: 'Manrope',
    color: 'var(--main-light-font-color)',
    fontSize: 28,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1 style={styles.title}>Medicine-Delivery</h1>
      </div>
    </div>
  );
}
