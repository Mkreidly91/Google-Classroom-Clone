function navbar(page) {
  console.log(page);
  const header = document.getElementById('header');
  const nav = `
        <nav class="flex items-center ">
              <div class="flex items-center padding-left-lg  ${
                page === 'classes' ? `grow` : ``
              }">
                    <div>
                        <button id="hamburger">
                            <img src="src/assets/images/icons/menu.svg" alt="" />
                        </button>
                    </div>
                    ${
                      page === 'classes'
                        ? ` <div class="left-part flex items-center">
                                <img src="src/assets/images/googleLogo.svg" alt="" />
                                &nbsp;
                                <span class="classroom">Classroom</span>
                            </div>`
                        : ``
                    }
                    
              </div>
              ${
                page === 'classes' || page === 'assignment'
                  ? ' <div class="flex items-center grow justify-center gap-20"></div>'
                  : ` 
                <div class="flex items-center grow justify-center gap-20">
                        <div class="tab ${
                          page === 'stream' ? `active` : ``
                        } id="stream">Stream
                        </div>
                        <div class="tab ${
                          page === 'classwork' ? `active` : ``
                        }" id="classwork">Classwork
                        </div>
                        <div class="tab ${
                          page === 'people' ? `active` : ``
                        }" id="people">People
                        </div>
                </div>
                    
                   `
              }
           
              ${
                page === 'classes'
                  ? `  
                <div class="right-part flex items-center">
                  <div class="add-icon" id="add-icon">
                    <img src="src/assets/images/icons/add.svg" alt="add-icon" />
                    <div class="add-class-dropdown" id="add-class-dropdown">
                        <div class="add-class-dropdown-item" id="join-class">
                            Join class
                    </div>
                  
                </div>
              `
                  : ''
              }
                  
                  
                  <div class="apps-account flex items-center">
                      <div class="apps">
                          <a href="#!">
                              <img src="src/assets/images/icons/apps.svg" alt="" />
                          </a>
                      </div>
                      <div class="account">
                          <a href="#!">
                              <img class="br-50 padding-right-lg" src="src/assets/images/defaults/default-user.png" alt="" />
                          </a>
                      </div>
                  </div>
              </div>
            <nav/>
             `;

  header.innerHTML = nav;
}