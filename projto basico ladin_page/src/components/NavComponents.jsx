
const NavComponents = () => {
    const info_page = {
        name: "Gabriel",
        job: "Developer Web",
        tech: "JavaScript With React"
    };
  return (
    <div className="nav">
        <div>
            <h1 className="nome_principal">
                {info_page.name} Dev
            </h1>
        </div>
        <div className="info_job">
            <h2>
                {info_page.job}
            </h2>
            <h3 >
                {info_page.tech}
            </h3>
        </div>

    </div>
  )
}

export default NavComponents