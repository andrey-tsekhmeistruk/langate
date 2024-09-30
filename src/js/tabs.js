export class Tabs {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.tabCards = this.container.querySelectorAll('.tabs-card');
    this.detailImage = this.container.querySelector('.tabs-detail-image');
    this.detailText = this.container.querySelector('.tabs-detail-text');
    this.tabsData = [
      {
        image: 'https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.webp?b=1&s=612x612&w=0&k=20&c=8varqjy2VLQHBm658rl2hS7MMakLA5iXd7Qvr7L8bx4=',
        title: 'Criteria: Technical Excellence',
        content: 'I would like to thank each of you for your outstanding contributions...',
        signature: 'Anna Parker',
        date: 'Award Date: 10/19/2015'
      },
      {
        image: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=612x612&w=0&k=20&c=Zm1MthU_G_LzfjBFBaMORRnuBhMsCjPQ38Ksfg4zl9g=',
        title: 'Criteria: Innovation',
        content: 'You demonstrated innovation by leading the project forward...',
        signature: 'John Doe',
        date: 'Award Date: 12/10/2019'
      },
      {
        image: 'https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=',
        title: 'Criteria: Teamwork',
        content: 'The collaboration between all departments made this a success...',
        signature: 'Emily Carter',
        date: 'Award Date: 08/05/2020'
      },
      {
        image: 'https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?cs=srgb&dl=pexels-rebrand-cities-581004-1367272.jpg&fm=jpg',
        title: 'Criteria: Teamwork',
        content: 'The collaboration between all departments made this a success...',
        signature: 'Emily Carter',
        date: 'Award Date: 08/05/2020'
      },
      {
        image: 'https://t4.ftcdn.net/jpg/05/06/75/11/360_F_506751155_fJ5Ko5T0wsTH7Q9VNwEgo6J81da8arlD.jpg',
        title: 'Criteria: Teamwork',
        content: 'The collaboration between all departments made this a success...',
        signature: 'Emily Carter',
        date: 'Award Date: 08/05/2020'
      },
      {
        image: 'https://media.istockphoto.com/id/871518740/photo/people-of-different-ages-and-nationalities-having-fun-together.jpg?s=612x612&w=0&k=20&c=8RW_kfcdLHs4sEo2nngwMT4zFmOBXSeCRlG-wrwR4BE=',
        title: 'Criteria: Teamwork',
        content: 'The collaboration between all departments made this a success...',
        signature: 'Emily Carter',
        date: 'Award Date: 08/05/2020'
      },
    ];
  }

  initialize() {
    this.updateTabDetail(0);
    this.updateActiveTab(this.tabCards[0]);

    this.tabCards.forEach((tab, index) => {
      tab.addEventListener('click', (event) => {
        this.updateTabDetail(index);
        this.updateActiveTab(tab);
      });
    });
  }

  updateTabDetail(index) {
    const tabData = this.tabsData[index];
    this.detailImage.src = tabData.image;
    this.detailText.querySelector('[data-tab-title]').textContent = tabData.title;
    this.detailText.querySelector('[data-tab-content]').textContent = tabData.content;
    this.detailText.querySelector('[data-tab-signature]').textContent = tabData.signature;
    this.detailText.querySelector('[data-tab-date]').textContent = tabData.date;
  }

  updateActiveTab(activeTab) {
    this.tabCards.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
  }
}
