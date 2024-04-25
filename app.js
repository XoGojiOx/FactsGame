let request = parseInt(
  prompt("Do you want to know more about 2020, 2021, 2022, 2023, or 2024?")
);

while (isNaN(request) || request < 2020 || request > 2024) {
  request = parseInt(prompt("Please enter 2020, 2021, 2022, 2023, or 2024"));
}

let years = [];
years[2024] = {
  fact1: `Toby Keith died February 5th of 2024.`,
  fact2: `Baltimore's iconic Francis Scott Key Bridge collapsed after being struck by a cargo ship.`,
  fact3: `A full lunar eclipse took place`,
};
years[2023] = {
  fact1: `Ozzy Osbourne announced his retirement from touring at 74 years old`,
  fact2: `Turkey and Syria were struck by a catastrophic 7.8 magnitude earthquake that killed 59,259 people`,
  fact3: `The FBI publicly confirmed that they believed COVID-19 originated in a lab in Wuhan, China`,
  fact4: `The International Criminal Court issued an arrest warrant against Russian President Vladimir Putin`,
  fact5: `Finland officially joined Nato, becoming the 31st member of the security alliance`,
  fact6: `The FDA gave Elon Musk the go-ahead to trial his Neuralink brain implants on humans`,
  fact7: `OceanGates Titan submersible imploded during an expedition to the wreck of the Titanic`,
  fact8: `India became the fourth nation to successfully land a spacecraft on the moon`,
  fact9: `Microsoft purchased Activision Blizzard in a record-breaking $69 billion takeover`,
};
years[2022] = {
  fact1: `A 57 year old man received the first transplant heart from a genetically modified pig`,
  fact2: `Koalas were listed as endangered for the first time in Australian history`,
  fact3: `USA's men's hockey team beat Canada's for the first time in 12 years`,
  fact4: `Russia began to invade Ukraine, and was described by President Putin as a 'special military operation'`,
  fact5: `US President Joe Biden announced that Americans no longer needed to ear masks against COVID-19`,
  fact6: `During the Oscar's ceremony, Will Smith slapped Chris Rock following a joke directed towards Will's wife, Jada Pinkett-Smith`,
  fact7: `Elon Musk bought a 9.2% stake in Twitter, amounting to $2.9 billion`,
  fact8: `President Joe Biden signed the 2022 Lend-Lease act to send military equipment to Ukraine`,
  fact9: `McDonalds sold their business in Russia to a local licensee to allow him to operate the restaurants under a new brand`,
  fact10: `The US supreme court officially overturned women's constitutional right to abortion`,
  fact11: `NASA's James Webb Space Telescope release its first groundbreaking images from space`,
};
years[2021] = {
  fact1: `Five minutes after take-off, Sriwijaya Air Flight 182 crashed north of Jakarta, Indonesia, killing all 62 passengers`,
  fact2: `The UK hit a milestone after giving 10 million people a COVI-19 vaccination`,
  fact3: `The Perseverance rover successfully landed on Mars`,
  fact4: `Hasbro announced that their Mr. Potato Head brand was changing its name to be gender inclusive`,
  fact5: `Simpsons voice actor Hank Azaria apologized for voicing Apu for 30 years`,
  fact6: `US President Joe Biden announced the withdrawal of all US troops from Afghanistan by September 11, 2021`,
  fact7: `Johns Hopkins University announced that the number of people who died worldwide de to the COVID-19 pandemic had reached three million`,
  fact8: `The World Health Organization approved the Sinopharm COVID-19 vaccine for emergency use`,
  fact9: `Former police officer Derek Chauvin was sentenced to 22.5 years in prison for the murder of George Floyd`,
  fact10: `Alec Baldwin accidentally used a live firearm during a movie rehearsal, during which he shot and killed a cinematographer`,
  fact11: `The James Webb Space Telescope was launched from the Guiana Space Center`,
};
years[2020] = {
  fact1: `One hundred million people were placed in lockdown in Wuhan, China, amid the COVID-19 outbreak`,
  fact2: `On Feburary 6th United States had its first official COVID-19 related death`,
  fact3: `Scientists observed the biggest explosion in the universe, 390 million light-years away`,
  fact4: `On March 11th, the World Health Organization confirmed that the spread of COVID-19 was now at a Pandemic stage`,
  fact5: `Bill Gates left the Microsoft board after founding the company four decades prior`,
  fact6: `Tiger King was released on Netflix`,
  fact7: `Shenzhen became the first Chinese city to ban eating cats and dogs`,
  fact8: `A pair of Michael Jordan's Air Jordan sneakers sold for a record $560,000 at auction`,
  fact9: `On May 26th a series of worldwide protests began in reaction to the murder of George Floyd by Minneapolis police`,
  fact10: `On July 6th, America officially began to withdraw from the World Health Organization`,
  fact11: `Apple became the first US company to be valued at $2 trillion`,
  fact12: `The united kingdom became the first country to legalize the use of the Pfizer COVID-19 vaccine`,
  fact13: `Koby Bryant dies in a helicopter crash that also took the life of his daughter`,
};

if (request === 2020) {
  console.log(years[2020].fact1);
  let request = prompt(
    "Do you want another fact from this year? Yes or No? You Can type Quit at anytime to exit!"
  ).toLowerCase();
  if (request === "yes") {
    console.log(years[2020].fact2);
    let request = prompt(
      "Do you want another fact from this year? Yes or No? You can type Quit at anytime to exit!"
    ).toLowerCase();
    if (request === "yes") {
      console.log(years[2020].fact3);
      let request = prompt(
        "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
      ).toLowerCase();
      if (request === "yes") {
        console.log(years[2020].fact4);
        let request = prompt(
          "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
        ).toLowerCase();
        if (request === "yes") {
          console.log(years[2020].fact5);
          let request = prompt(
            "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
          ).toLowerCase();
          if (request === "yes") {
            console.log(years[2020].fact6);
            let request = prompt(
              "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
            ).toLowerCase();
            if (request === "yes") {
              console.log(years[2020].fact7);
              let request = prompt(
                "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
              ).toLowerCase();
              if (request === "yes") {
                console.log(years[2020].fact8);
                let request = prompt(
                  "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
                ).toLowerCase();
                if (request === "yes") {
                  console.log(years[2020].fact9);
                  let request = prompt(
                    "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
                  ).toLowerCase();
                  if (request === "yes") {
                    console.log(years[2020].fact10);
                    let request = prompt(
                      "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
                    ).toLowerCase();
                    if (request === "yes") {
                      console.log(years[2020].fact11);
                      let request = prompt(
                        "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
                      ).toLowerCase();
                      if (request === "yes") {
                        console.log(years[2020].fact12);
                        let request = prompt(
                          "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
                        ).toLowerCase();
                        if (request === "yes") {
                          console.log(years[2020].fact13);
                          let request = prompt(
                            "Do you want another fact from this year? Yes or No? You can type Quit anytime to exit!"
                          ).toLowerCase();
                        } else if (request === "no") {
                          let request = parseInt(
                            prompt(
                              "What year would between 2020 and 20204 would you like information on?"
                            )
                          );
                        } else if (request === "quit") {
                          alert("Thanks for Playing!");
                        } else {
                          let request = prompt(
                            "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
                          );
                        }
                      } else if (request === "no") {
                        let request = parseInt(
                          prompt(
                            "What year would between 2020 and 20204 would you like information on?"
                          )
                        );
                      } else if (request === "quit") {
                        alert("Thanks for Playing!");
                      } else {
                        let request = prompt(
                          "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
                        );
                      }
                    } else if (request === "no") {
                      let request = parseInt(
                        prompt(
                          "What year would between 2020 and 20204 would you like information on?"
                        )
                      );
                    } else if (request === "quit") {
                      alert("Thanks for Playing!");
                    } else {
                      let request = prompt(
                        "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
                      );
                    }
                  } else if (request === "no") {
                    let request = parseInt(
                      prompt(
                        "What year would between 2020 and 20204 would you like information on?"
                      )
                    );
                  } else if (request === "quit") {
                    alert("Thanks for Playing!");
                  } else {
                    let request = prompt(
                      "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
                    );
                  }
                } else if (request === "no") {
                  let request = parseInt(
                    prompt(
                      "What year would between 2020 and 20204 would you like information on?"
                    )
                  );
                } else if (request === "quit") {
                  alert("Thanks for Playing!");
                } else {
                  let request = prompt(
                    "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
                  );
                }
              } else if (request === "no") {
                let request = parseInt(
                  prompt(
                    "What year would between 2020 and 20204 would you like information on?"
                  )
                );
              } else if (request === "quit") {
                alert("Thanks for Playing!");
              } else {
                let request = prompt(
                  "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
                );
              }
            } else if (request === "no") {
              let request = parseInt(
                prompt(
                  "What year would between 2020 and 20204 would you like information on?"
                )
              );
            } else if (request === "quit") {
              alert("Thanks for Playing!");
            } else {
              let request = prompt(
                "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
              );
            }
          } else if (request === "no") {
            let request = parseInt(
              prompt(
                "What year would between 2020 and 20204 would you like information on?"
              )
            );
          } else if (request === "quit") {
            alert("Thanks for Playing!");
          } else {
            let request = prompt(
              "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
            );
          }
        } else if (request === "no") {
          let request = parseInt(
            prompt(
              "What year would between 2020 and 20204 would you like information on?"
            )
          );
        } else if (request === "quit") {
          alert("Thanks for Playing!");
        } else {
          let request = prompt(
            "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
          );
        }
      } else if (request === "no") {
        let request = parseInt(
          prompt(
            "What year would between 2020 and 20204 would you like information on?"
          )
        );
      } else if (request === "quit") {
        alert("Thanks for Playing!");
      } else {
        let request = prompt(
          "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
        );
      }
    } else if (request === "no") {
      let request = parseInt(
        prompt(
          "What year would between 2020 and 20204 would you like information on?"
        )
      );
    } else if (request === "quit") {
      alert("Thanks for Playing!");
    } else {
      let request = prompt(
        "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
      );
    }
  } else if (request === "no") {
    let request = parseInt(
      prompt(
        "What year would between 2020 and 20204 would you like information on?"
      )
    );
  } else if (request === "quit") {
    alert("Thanks for Playing!");
  } else {
    let request = prompt(
      "Please enter a year between 2020 and 2024 or type QUIT to stop the game"
    );
  }
}

//   else if (request === "no") {
//       let request = parseInt(
//         prompt("What year between 2020 and 2024 would you like information on?")
//       );
//     } else if (request === "quit") {
//       console.log(alert("Thanks for stopping by!"));
//     } else {
//       console.log(
//         prompt("Please give a year between 2020 and 2024 or type QUIT")
//       );

// } else if (request === 2021) {
//   console.log(years[2021].fact1);
// } else if (request === 2022) {
//   console.log(years[2022].fact1);
// } else if (request === 2023) {
//   console.log(years[2023].fact1);
// } else if (request === 2024) {
//   console.log(years[2024].fact1);
// }
