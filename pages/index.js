export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://www.craft.do/s/3bJptlj6XxWnWg',
      permanent: false,
    }
  }
}

export default function Home() {
  return <div>🙃</div>
}
