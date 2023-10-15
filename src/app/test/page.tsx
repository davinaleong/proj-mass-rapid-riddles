import LibConfig from "./../lib/config"
import HeaderComponent from "./../components/header"

export default function Test() {
  return (
    <>
      <HeaderComponent
        title={LibConfig.title}
        subtitle={LibConfig.copyright}
        showBackBtn={true}
      />

      <main className="wrapper mx-auto py-4">
        <p>Riddle content here.</p>
      </main>
    </>
  )
}
