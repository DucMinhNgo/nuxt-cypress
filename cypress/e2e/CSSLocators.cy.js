describe('CSSLocators', () => {

  it('fetches all items', () => {
    cy.request({
      method: 'POST',
      url: 'https://abc/graphql',
      body: {
        operationName: 'musicList',
        query: `
          query musicList {
            musicList(limit: 10) {
              count
              list {
                id
              }
            }
          }
        `,
      },
    }).then(res => {
      console.log(res.body.data.musicList);
    })

    // cy.wait("@a").then(res => {
    //   console.log({res});
    // })
  })

    it("graphql", () => {
      cy.request({
        method: 'POST',
        url: 'https://abc/graphql',
        body: {
          operationName: 'musicList',
          query: `
            query musicList {
                musicList {
                    count
                    list {
                      id
                      title
                      publishStatus
                      createdAt
                      streamingFile {
                        id
                        fileName
                        name
                        type
                      }
                    }
              }
            }
          `,
        },
      }).as('musicList');
    //   cy.wait('@musicList')
    //     .then((res) => {
    //       cy.log(JSON.stringify(res.body.data))
    //       // const musicList = res.data.musicList;
    //       // musicTestData.music = musicList.list[0];
    //       // musicTestData.total = musicList.list.length;
    //       // musicTestData.totalPage = Math.ceil(musicList.count / PAGE_LIMIT);
    //     })
    })
    it("request", () => {
        cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {
      }).then((r) => {
         expect(r.status).to.eq(200)
         expect(r).to.have.property('headers')
         expect(r).to.have.property('duration')
      });
    })
    it('css-locators', () => {
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.get('#search_query_top').type('T-Shirts');
        cy.get("[name='submit_search']").click();
        cy.get(".lighter").contains("T-Shirts");
    })
})