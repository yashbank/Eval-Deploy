import Link from "next/link";
import React from "react";

const Projects = ({ repo }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
        padding: "2%",
      }}
    >
      {repo.items.map((el) => {
        return (
          <Link key={el.id} href={el.html_url}>
            <div
              style={{ border: "1px solid grey", width: "100%", padding: "2%" }}
            >
              <h1
                style={{
                  margin: "1%",
                }}
              >
                {el.name}
              </h1>
              <h3>{el.description}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <p>
                    <img
                      style={{
                        width: "10%",
                      }}
                      src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                      alt="star"
                    />
                    {el.stargazers_count}
                  </p>
                  <p>
                    <img
                      style={{
                        width: "50%",
                      }}
                      src="https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png"
                    />
                    {el.forks_count}
                  </p>
                </div>
                <div>
                  <h2>{el.language}</h2>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  let r = await fetch(
    "https://api.github.com/search/repositories?q=user:yashbank+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let rep = await r.json();
  console.log(rep);
  return {
    props: {
      repo: rep,
    }, // will be passed to the page component as props
  };
}
