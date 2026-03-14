import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const translations: Record<'uk' | 'en', Record<string, string>> = {
  uk: {
    langBtn: 'Uk',
    heroTitle: 'Припиніть робити справи,\nпочніть завершувати ',
    heroLabel: 'квести!',
    heroDesc: 'Натисни кнопку, отримай свого героя та підкоряй щоденні справи з посмішкою.',
    heroBtn: 'Почати завдання!',
    section2Title: 'Скажи ШІ свої завдання.\nОтримай епічний квест.',
    section2Desc: 'Наш ШІ аналізує твій розпорядок і створює персоналізовані, епічні місії. Припини робити рутину — почни грати у своє життя.',
    section3Title: 'Збирай всі значки!',
    section3Desc: 'Перетвори нудні справи на полювання за трофеями. Відкривай рідкісні значки, підвищуй свій профіль і отримуй нагороди за виживання у щоденній рутині.',
    section4Title: 'Сфоткай свою наступну місію.',
    section4Desc: 'Залиш роздуми для ШІ. Просто зроби фото будь-якої таски. Ми проаналізуємо його і за лічені секунди згенеруємо твій новий квест, героя та нагороду.',



    qrscan: 'Скануй, щоб спробувати зараз!',
    dotor: '..або',
    download: 'завантаж',
    anapp : 'додаток',
    anyquestions: 'Є питання?',
    contactus: 'Зв\'яжіться з нами',
  },
  en: {
    langBtn: 'En',
    heroTitle: 'Stop doing chores,\n' +
      'Start completing ',
    heroLabel: 'quests!',
    heroDesc: 'Hit the button, get your hero, and smash your daily tasks with a smile.',
    heroBtn: 'Start doing quests!',
    section2Title: 'Tell AI your tasks.\nGet an epic quest.',
    section2Desc: 'Our AI analyzes your routine and creates personalized, epic missions. Stop doing chores, start playing your life.',
    section3Title: 'Collect all badges!',
    section3Desc: 'Turn boring chores into a trophy hunt. Unlock rare badges, level up your profile, and get rewarded for surviving your daily routine.',
    section4Title: 'Picture Your Next Mission.',
    section4Desc: 'Let AI do the thinking. Snap a pic of any task. We analyze it and generate your next quest, hero, and reward in seconds.',

    qrscan: 'Scan and try now!',
    dotor: '..or',
    download: 'download',
    anapp : 'an app',
    anyquestions: 'Have any questions?',
    contactus: 'Contact us',


  }
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentLang: 'uk' | 'en';

  constructor() {
    const saved = localStorage.getItem('lang') as 'uk' | 'en';
    this.currentLang = saved === 'uk' || saved === 'en' ? saved : 'en';
  }

  toggleLang(): void {
    this.currentLang = this.currentLang === 'uk' ? 'en' : 'uk';
    localStorage.setItem('lang', this.currentLang);
  }

  get t(): Record<string, string> {
    return translations[this.currentLang];
  }

  goToApp(): void {
    window.open('https://drive.google.com/drive/folders/1UqLcpEVXZDLE4ZWryGDuTg282GG9HEUb', '_blank');
  }
}
