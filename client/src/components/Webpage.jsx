import React from 'react';
import Overview from './Overview.jsx';
import styles from '../styles/Webpage.css';

const Webpage = props => (
  <div>
    <nav className={`navbar navbar-expand-lg ${styles.navBorder} ${styles.navbar}`}>
      <div className={`${styles.navBorder} ${styles.navBrand}`}>
        <a className={`navbar-brand ${styles['navbar-brand']}`} href="#">{'CavaTable'}</a>
      </div>
      <div className={`${styles.navBorder} ${styles.locationSelectorContainer}`}>
        <span className={`fa fa-map-marker fa-lg ${styles.locationSelectorIcon}`}></span>
        <span className={styles.locationSelector}>
          {'San Francisco Bay Area   San Francisco'}
        </span>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div className={styles.signupBtn}>
            <a className={styles.signupBtn_navlink} href="#">{'Sign Up'}</a>
          </div>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles['nav-link']}`} href="#">{'Sign In'}</a>
        </li>
      </ul>
    </nav>

    <nav aria-label="breadcrumb">
      <ol className={`breadcrumb ${styles.breadcrumbList}`}>
        <li className={`breadcrumb-item ${styles.breadcrumbItem}`}><a href="#">{'Home'}</a></li>
        <li className={`breadcrumb-item ${styles.breadcrumbItem}`}><a href="#">{'United States'}</a></li>
        <li className={`breadcrumb-item ${styles.breadcrumbItem}`}><a href="#">{'San Francisco Bay Area'}</a></li>
        <li className={`breadcrumb-item ${styles.breadcrumbItem} active`} aria-current="page">{'San Francisco'}</li>
      </ol>
    </nav>

    <div className={`jumbotron ${styles.jumbotron}`}></div>

    <div className={`container-fluid ${styles.bodyContainer}`}>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6">
          <div className="container">
            <nav className={`navbar ${styles.navbar} ${styles.bodyNav} ml-auto sticky-top`}>
              <ul className={`navbar-nav navbar-expand mr-auto ${styles.moduleNav}`}>
                <li className={`nav-item ${styles.bodyNavActive} ${styles.bodyNavItem}`}>{'Overview'}</li>
                <li className={`nav-item ${styles.bodyNavItem}`}>{'Photos'}</li>
                <li className={`nav-item ${styles.bodyNavItem}`}>{'Menu'}</li>
                <li className={`nav-item ${styles.bodyNavItem}`}>{'Reviews'}</li>
              </ul>
            </nav>

            <Overview restaurantId={props.match.params.restaurantId} />
            <div id="photosMod">
              <h1>{'Photos'}</h1>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ex. Integer at nibh purus. Curabitur molestie blandit blandit. Suspendisse nibh nisl, laoreet vitae venenatis eget, mattis ac ante. Mauris feugiat dapibus justo, ac gravida sapien blandit eu. Maecenas ut ornare mi. Proin quis venenatis ex. Morbi ut libero est.

              Donec eget condimentum odio. Donec sed ex arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat ipsum id nisl consequat malesuada. Etiam ultricies malesuada volutpat. Phasellus tristique commodo elit, eu bibendum diam pellentesque tristique. Vivamus tempus mi et elementum tincidunt. Maecenas laoreet nisi sit amet posuere mollis. Vestibulum convallis ut odio a efficitur. Mauris vulputate dictum lectus consectetur venenatis. Nulla sed lacus suscipit, pharetra purus eu, elementum tortor.
              
              Donec vel consequat dolor, at fermentum libero. Ut eu diam nec libero fringilla volutpat. Aliquam ac porttitor mauris. Quisque tempus ultrices nunc, ac finibus nunc sollicitudin quis. Mauris lobortis viverra dui sed finibus. Nunc volutpat pharetra velit vel convallis. Integer euismod malesuada metus vel vehicula. Duis gravida nisl a sem ultricies, et commodo tellus commodo. Maecenas aliquet diam tellus. Praesent eget odio ligula. Curabitur eleifend augue nec dolor viverra interdum.
              
              Ut et mauris eu ipsum congue bibendum et et nulla. Mauris consectetur vestibulum nulla vel feugiat. Ut quis sagittis nisi, ac mollis leo. Duis tincidunt augue vitae leo dictum, vel porta metus venenatis. Mauris sed erat dui. Phasellus volutpat scelerisque massa eget pretium. Cras non velit nec quam venenatis suscipit in quis neque. Morbi finibus lorem vel neque egestas, vel aliquet odio ornare. Nam imperdiet nec mi quis venenatis.
              
              Nullam cursus justo nibh. Curabitur eget urna pellentesque, fringilla nisl eu, lobortis neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce volutpat ligula id nulla rhoncus elementum. Sed aliquet lacinia congue. Praesent quis aliquam leo. Nunc nisl ex, cursus non mauris accumsan, laoreet semper sapien. Sed scelerisque dui erat, et malesuada justo sodales id. Vivamus at lacinia tortor. Pellentesque aliquet volutpat gravida. Vivamus et molestie libero.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ex. Integer at nibh purus. Curabitur molestie blandit blandit. Suspendisse nibh nisl, laoreet vitae venenatis eget, mattis ac ante. Mauris feugiat dapibus justo, ac gravida sapien blandit eu. Maecenas ut ornare mi. Proin quis venenatis ex. Morbi ut libero est.

              Donec eget condimentum odio. Donec sed ex arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat ipsum id nisl consequat malesuada. Etiam ultricies malesuada volutpat. Phasellus tristique commodo elit, eu bibendum diam pellentesque tristique. Vivamus tempus mi et elementum tincidunt. Maecenas laoreet nisi sit amet posuere mollis. Vestibulum convallis ut odio a efficitur. Mauris vulputate dictum lectus consectetur venenatis. Nulla sed lacus suscipit, pharetra purus eu, elementum tortor.
              
              Donec vel consequat dolor, at fermentum libero. Ut eu diam nec libero fringilla volutpat. Aliquam ac porttitor mauris. Quisque tempus ultrices nunc, ac finibus nunc sollicitudin quis. Mauris lobortis viverra dui sed finibus. Nunc volutpat pharetra velit vel convallis. Integer euismod malesuada metus vel vehicula. Duis gravida nisl a sem ultricies, et commodo tellus commodo. Maecenas aliquet diam tellus. Praesent eget odio ligula. Curabitur eleifend augue nec dolor viverra interdum.
              
              Ut et mauris eu ipsum congue bibendum et et nulla. Mauris consectetur vestibulum nulla vel feugiat. Ut quis sagittis nisi, ac mollis leo. Duis tincidunt augue vitae leo dictum, vel porta metus venenatis. Mauris sed erat dui. Phasellus volutpat scelerisque massa eget pretium. Cras non velit nec quam venenatis suscipit in quis neque. Morbi finibus lorem vel neque egestas, vel aliquet odio ornare. Nam imperdiet nec mi quis venenatis.
              
              Nullam cursus justo nibh. Curabitur eget urna pellentesque, fringilla nisl eu, lobortis neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce volutpat ligula id nulla rhoncus elementum. Sed aliquet lacinia congue. Praesent quis aliquam leo. Nunc nisl ex, cursus non mauris accumsan, laoreet semper sapien. Sed scelerisque dui erat, et malesuada justo sodales id. Vivamus at lacinia tortor. Pellentesque aliquet volutpat gravida. Vivamus et molestie libero.`}
            </div>
            <div id="menuMod">
              <h1>Menus</h1>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ex. Integer at nibh purus. Curabitur molestie blandit blandit. Suspendisse nibh nisl, laoreet vitae venenatis eget, mattis ac ante. Mauris feugiat dapibus justo, ac gravida sapien blandit eu. Maecenas ut ornare mi. Proin quis venenatis ex. Morbi ut libero est.

              Donec eget condimentum odio. Donec sed ex arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat ipsum id nisl consequat malesuada. Etiam ultricies malesuada volutpat. Phasellus tristique commodo elit, eu bibendum diam pellentesque tristique. Vivamus tempus mi et elementum tincidunt. Maecenas laoreet nisi sit amet posuere mollis. Vestibulum convallis ut odio a efficitur. Mauris vulputate dictum lectus consectetur venenatis. Nulla sed lacus suscipit, pharetra purus eu, elementum tortor.
              
              Donec vel consequat dolor, at fermentum libero. Ut eu diam nec libero fringilla volutpat. Aliquam ac porttitor mauris. Quisque tempus ultrices nunc, ac finibus nunc sollicitudin quis. Mauris lobortis viverra dui sed finibus. Nunc volutpat pharetra velit vel convallis. Integer euismod malesuada metus vel vehicula. Duis gravida nisl a sem ultricies, et commodo tellus commodo. Maecenas aliquet diam tellus. Praesent eget odio ligula. Curabitur eleifend augue nec dolor viverra interdum.
              
              Ut et mauris eu ipsum congue bibendum et et nulla. Mauris consectetur vestibulum nulla vel feugiat. Ut quis sagittis nisi, ac mollis leo. Duis tincidunt augue vitae leo dictum, vel porta metus venenatis. Mauris sed erat dui. Phasellus volutpat scelerisque massa eget pretium. Cras non velit nec quam venenatis suscipit in quis neque. Morbi finibus lorem vel neque egestas, vel aliquet odio ornare. Nam imperdiet nec mi quis venenatis.
              
              Nullam cursus justo nibh. Curabitur eget urna pellentesque, fringilla nisl eu, lobortis neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce volutpat ligula id nulla rhoncus elementum. Sed aliquet lacinia congue. Praesent quis aliquam leo. Nunc nisl ex, cursus non mauris accumsan, laoreet semper sapien. Sed scelerisque dui erat, et malesuada justo sodales id. Vivamus at lacinia tortor. Pellentesque aliquet volutpat gravida. Vivamus et molestie libero.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ex. Integer at nibh purus. Curabitur molestie blandit blandit. Suspendisse nibh nisl, laoreet vitae venenatis eget, mattis ac ante. Mauris feugiat dapibus justo, ac gravida sapien blandit eu. Maecenas ut ornare mi. Proin quis venenatis ex. Morbi ut libero est.

              Donec eget condimentum odio. Donec sed ex arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat ipsum id nisl consequat malesuada. Etiam ultricies malesuada volutpat. Phasellus tristique commodo elit, eu bibendum diam pellentesque tristique. Vivamus tempus mi et elementum tincidunt. Maecenas laoreet nisi sit amet posuere mollis. Vestibulum convallis ut odio a efficitur. Mauris vulputate dictum lectus consectetur venenatis. Nulla sed lacus suscipit, pharetra purus eu, elementum tortor.
              
              Donec vel consequat dolor, at fermentum libero. Ut eu diam nec libero fringilla volutpat. Aliquam ac porttitor mauris. Quisque tempus ultrices nunc, ac finibus nunc sollicitudin quis. Mauris lobortis viverra dui sed finibus. Nunc volutpat pharetra velit vel convallis. Integer euismod malesuada metus vel vehicula. Duis gravida nisl a sem ultricies, et commodo tellus commodo. Maecenas aliquet diam tellus. Praesent eget odio ligula. Curabitur eleifend augue nec dolor viverra interdum.
              
              Ut et mauris eu ipsum congue bibendum et et nulla. Mauris consectetur vestibulum nulla vel feugiat. Ut quis sagittis nisi, ac mollis leo. Duis tincidunt augue vitae leo dictum, vel porta metus venenatis. Mauris sed erat dui. Phasellus volutpat scelerisque massa eget pretium. Cras non velit nec quam venenatis suscipit in quis neque. Morbi finibus lorem vel neque egestas, vel aliquet odio ornare. Nam imperdiet nec mi quis venenatis.
              
              Nullam cursus justo nibh. Curabitur eget urna pellentesque, fringilla nisl eu, lobortis neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce volutpat ligula id nulla rhoncus elementum. Sed aliquet lacinia congue. Praesent quis aliquam leo. Nunc nisl ex, cursus non mauris accumsan, laoreet semper sapien. Sed scelerisque dui erat, et malesuada justo sodales id. Vivamus at lacinia tortor. Pellentesque aliquet volutpat gravida. Vivamus et molestie libero.`}
            </div>
            <div id="reviewsMod">
              <h1>{'Reviews'}</h1>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ex. Integer at nibh purus. Curabitur molestie blandit blandit. Suspendisse nibh nisl, laoreet vitae venenatis eget, mattis ac ante. Mauris feugiat dapibus justo, ac gravida sapien blandit eu. Maecenas ut ornare mi. Proin quis venenatis ex. Morbi ut libero est.

              Donec eget condimentum odio. Donec sed ex arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat ipsum id nisl consequat malesuada. Etiam ultricies malesuada volutpat. Phasellus tristique commodo elit, eu bibendum diam pellentesque tristique. Vivamus tempus mi et elementum tincidunt. Maecenas laoreet nisi sit amet posuere mollis. Vestibulum convallis ut odio a efficitur. Mauris vulputate dictum lectus consectetur venenatis. Nulla sed lacus suscipit, pharetra purus eu, elementum tortor.
              
              Donec vel consequat dolor, at fermentum libero. Ut eu diam nec libero fringilla volutpat. Aliquam ac porttitor mauris. Quisque tempus ultrices nunc, ac finibus nunc sollicitudin quis. Mauris lobortis viverra dui sed finibus. Nunc volutpat pharetra velit vel convallis. Integer euismod malesuada metus vel vehicula. Duis gravida nisl a sem ultricies, et commodo tellus commodo. Maecenas aliquet diam tellus. Praesent eget odio ligula. Curabitur eleifend augue nec dolor viverra interdum.
              
              Ut et mauris eu ipsum congue bibendum et et nulla. Mauris consectetur vestibulum nulla vel feugiat. Ut quis sagittis nisi, ac mollis leo. Duis tincidunt augue vitae leo dictum, vel porta metus venenatis. Mauris sed erat dui. Phasellus volutpat scelerisque massa eget pretium. Cras non velit nec quam venenatis suscipit in quis neque. Morbi finibus lorem vel neque egestas, vel aliquet odio ornare. Nam imperdiet nec mi quis venenatis.
              
              Nullam cursus justo nibh. Curabitur eget urna pellentesque, fringilla nisl eu, lobortis neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce volutpat ligula id nulla rhoncus elementum. Sed aliquet lacinia congue. Praesent quis aliquam leo. Nunc nisl ex, cursus non mauris accumsan, laoreet semper sapien. Sed scelerisque dui erat, et malesuada justo sodales id. Vivamus at lacinia tortor. Pellentesque aliquet volutpat gravida. Vivamus et molestie libero.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ex. Integer at nibh purus. Curabitur molestie blandit blandit. Suspendisse nibh nisl, laoreet vitae venenatis eget, mattis ac ante. Mauris feugiat dapibus justo, ac gravida sapien blandit eu. Maecenas ut ornare mi. Proin quis venenatis ex. Morbi ut libero est.

              Donec eget condimentum odio. Donec sed ex arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat ipsum id nisl consequat malesuada. Etiam ultricies malesuada volutpat. Phasellus tristique commodo elit, eu bibendum diam pellentesque tristique. Vivamus tempus mi et elementum tincidunt. Maecenas laoreet nisi sit amet posuere mollis. Vestibulum convallis ut odio a efficitur. Mauris vulputate dictum lectus consectetur venenatis. Nulla sed lacus suscipit, pharetra purus eu, elementum tortor.
              
              Donec vel consequat dolor, at fermentum libero. Ut eu diam nec libero fringilla volutpat. Aliquam ac porttitor mauris. Quisque tempus ultrices nunc, ac finibus nunc sollicitudin quis. Mauris lobortis viverra dui sed finibus. Nunc volutpat pharetra velit vel convallis. Integer euismod malesuada metus vel vehicula. Duis gravida nisl a sem ultricies, et commodo tellus commodo. Maecenas aliquet diam tellus. Praesent eget odio ligula. Curabitur eleifend augue nec dolor viverra interdum.
              
              Ut et mauris eu ipsum congue bibendum et et nulla. Mauris consectetur vestibulum nulla vel feugiat. Ut quis sagittis nisi, ac mollis leo. Duis tincidunt augue vitae leo dictum, vel porta metus venenatis. Mauris sed erat dui. Phasellus volutpat scelerisque massa eget pretium. Cras non velit nec quam venenatis suscipit in quis neque. Morbi finibus lorem vel neque egestas, vel aliquet odio ornare. Nam imperdiet nec mi quis venenatis.
              
              Nullam cursus justo nibh. Curabitur eget urna pellentesque, fringilla nisl eu, lobortis neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce volutpat ligula id nulla rhoncus elementum. Sed aliquet lacinia congue. Praesent quis aliquam leo. Nunc nisl ex, cursus non mauris accumsan, laoreet semper sapien. Sed scelerisque dui erat, et malesuada justo sodales id. Vivamus at lacinia tortor. Pellentesque aliquet volutpat gravida. Vivamus et molestie libero.`}
            </div>

          </div>
        </div>
        <div className="col-3">
          <div id="reservationMod" className={`container ${styles.reservationContainer} sticky-top`}>
            <h1>{'Reservation'}s</h1>
            <div>
              {`Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!
              Andrew's cool reservation module!`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Webpage;
