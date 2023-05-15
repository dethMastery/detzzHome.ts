import React from "react";

export class Head extends React.Component <any, any> {
  render() {
    return (
      <div className="middle" id="topPage" style={{ background: `url(${this.props.bg})` }}>
        <div className="overlay">
          <h1 className="startup">
            Welcome to <a href="https://github.com/KIZUNEParty">kizune</a>
          </h1>
        </div>
      </div>
    )
  }
}

export class Repo extends React.Component {
  render() {
    return (
      <div className="box" id="Repo">
        <h1 style={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <u>
            Featured Repository
          </u>
        </h1>

        <div className="container">
          <div className="cardBox">
            <a href="https://github.com/KIZUNEParty/tyDon">
              <h1>
                tyDon
              </h1>
            </a>
            <p>
              Just a laziest cli package that making for convert time to epochtime.
            </p>
          </div>

          <div className="cardBox">
            <a href="https://github.com/KIZUNEParty/meme-gen">
              <h1>
                meme-gen
              </h1>
            </a>
            <p>
              Just some of meme generator
            </p>
          </div>

          <div className="cardBox">
            <a href="https://github.com/KIZUNEParty/food-rand">
              <h1>
                food-rand
              </h1>
            </a>
            <p>
              Easiest and Fastest way for you to find a menu for your meal if you're in UPDorm!!
            </p>
          </div>

          <div className="cardBox">
            <a href="https://github.com/KIZUNEParty/anime.frame">
              <h1>
                anime.frame
              </h1>
            </a>
            <p>
            for weeb boi from weeb boi
            </p>
          </div>

          <div className="cardBox">
            <a href="https://github.com/KIZUNEParty/ranString">
              <h1>
              ranString
              </h1>
            </a>
            <p>
              just string randomizer
            </p>
          </div>

        </div>

      </div>
    );
  }
}

export class Member extends React.Component {
  render() {
    return (
      <div className="box" id="Member">
        <h1 style={{textAlign: 'center'}}>
          <u>
            Organize Member
          </u>
        </h1>

        <div className="container">
          <div className="cardBox">
            <img src="https://avatars.githubusercontent.com/u/25049577?v=4" alt="deth" />
            <h3>
              <a href="https://github.com/dethMastery">
                Suphakit P. (dethMastery)
              </a>
            </h3>
            <span>
              a music composer with full-stack web dev. skill :D
            </span>
          </div>

          <div className="cardBox">
            <img src="https://avatars.githubusercontent.com/u/79712705?v=4" alt="deth" />
            <h3>
              <a href="https://github.com/mTy8421">
                Panthakit Totid (mTy8421)
              </a>
            </h3>
            <span>
              🤔😒
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export class Contact extends React.Component {
  render() {
    return (
      <div className="box" id="Contact">
        <h1 style={{textAlign: 'center'}}>
          <u>
            Contact
          </u>
        </h1>
        <div className="contactBox">
          <p>
            E-mail: <a href="mailto:kizune@000198.xyz">kizune@000198.xyz</a>
          </p>
        </div>
      </div>
    )
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer" id='Footer'>
        <p>
          made w/ 🤍 by <a href="https://github.com/KIZUNEParty">kizune team.</a>
        </p>
        <p>
          &copy; 2023 <a href="https://suphakit.net">Suphakit P.</a> All Right Reserved
        </p>
      </div>
    )
  }
}