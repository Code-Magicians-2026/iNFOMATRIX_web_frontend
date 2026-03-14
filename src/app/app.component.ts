import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PlanFeature {
  label: string;
}

export interface Plan {
  name: string;
  price: number;
  currency: string;
  features: PlanFeature[];
  highlighted?: boolean;
  ctaLabel?: string;
}

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
    anapp: 'додаток',
    anyquestions: 'Є питання?',
    contactus: 'Зв\'яжіться з нами',

    // Pricing hero
    pricingTitle: 'Спробуй Quest4kid+',
    pricingSubtitle: 'Квести без обмежень',
    pricingHeroBtn: 'Перший місяць безкоштовно!',
    pricingPlansTitle: 'Порівняй плани',

    // Plan names & CTA
    planFreeName: 'Безкоштовний',
    planPlusName: 'Плюс',
    planProName: 'Про',
    planFreeCta: 'Почати',
    planPlusCta: 'Спробувати безкоштовно!',
    planProCta: 'Обрати Про',

    // Free features
    freeF1: '15 запитів/день',
    freeF2: 'Базові аватари',
    freeF3: '2 дитини',
    freeF4: '1 батько',

    // Plus features
    plusF1: 'Все з Безкоштовного',
    plusF2: '75 запитів/день',
    plusF3: 'Більше аватарів',
    plusF4: '5 дітей',
    plusF5: '2 батьки',
    plusF6: 'Без реклами',
    plusF7: '2 групових квести/день',

    // Pro features
    proF1: 'Все з Безкоштовного та Плюс',
    proF2: '300 запитів/день',
    proF3: 'Більше аватарів',
    proF4: '10 дітей',
    proF5: '4 батьки',
    proF6: 'Генерація власного аватара',
    proF7: '10 групових квестів/день',
  },
  en: {
    langBtn: 'En',
    heroTitle: 'Stop doing chores,\nStart completing ',
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
    anapp: 'an app',
    anyquestions: 'Have any questions?',
    contactus: 'Contact us',

    // Pricing hero
    pricingTitle: 'Try Quest4kid+',
    pricingSubtitle: 'Quest with no limitations',
    pricingHeroBtn: 'Take 1 month for free!',
    pricingPlansTitle: 'Compare our plans',

    // Plan names & CTA
    planFreeName: 'Free',
    planPlusName: 'Plus',
    planProName: 'Pro',
    planFreeCta: 'Get Started',
    planPlusCta: 'Try 1 month free!',
    planProCta: 'Go Pro',

    // Free features
    freeF1: '15 prompts/day',
    freeF2: 'Basic avatars',
    freeF3: '2 Kids',
    freeF4: '1 Parent',

    // Plus features
    plusF1: 'Everything in Free',
    plusF2: '75 prompts/day',
    plusF3: 'More avatars',
    plusF4: '5 Kids',
    plusF5: '2 Parents',
    plusF6: 'No advertisement',
    plusF7: '2 group quests/day',

    // Pro features
    proF1: 'Everything in Free, Plus',
    proF2: '300 prompts/day',
    proF3: 'More avatars',
    proF4: '10 Kids',
    proF5: '4 Parents',
    proF6: 'Generate own avatar',
    proF7: '10 group quests/day',
  },
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
    window.open(
      'https://drive.google.com/drive/folders/1UqLcpEVXZDLE4ZWryGDuTg282GG9HEUb',
      '_blank'
    );
  }

  // Plans are now driven by translations — reactive to language switch
  get plans(): Plan[] {
    const t = this.t;
    return [
      {
        name: t['planFreeName'],
        price: 0,
        currency: 'USD',
        ctaLabel: t['planFreeCta'],
        features: [
          { label: t['freeF1'] },
          { label: t['freeF2'] },
          { label: t['freeF3'] },
          { label: t['freeF4'] },
        ],
      },
      {
        name: t['planPlusName'],
        price: 5,
        currency: 'USD',
        ctaLabel: t['planPlusCta'],
        features: [
          { label: t['plusF1'] },
          { label: t['plusF2'] },
          { label: t['plusF3'] },
          { label: t['plusF4'] },
          { label: t['plusF5'] },
          { label: t['plusF6'] },
          { label: t['plusF7'] },
        ],
      },
      {
        name: t['planProName'],
        price: 10,
        currency: 'USD',
        ctaLabel: t['planProCta'],
        features: [
          { label: t['proF1'] },
          { label: t['proF2'] },
          { label: t['proF3'] },
          { label: t['proF4'] },
          { label: t['proF5'] },
          { label: t['proF6'] },
          { label: t['proF7'] },
        ],
      },
    ];
  }
}
