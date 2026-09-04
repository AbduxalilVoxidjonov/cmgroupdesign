import type { Article, ArticleCategory, InsightsPage } from '../types';

export const articleCategories: Record<ArticleCategory, string> = {
  case: 'Опыт внедрения',
  technology: 'Выбор технологий',
  management: 'Управление',
  security: 'Безопасность',
};

export const articles: readonly Article[] = [
  {
    slug: 'crm-joriy-etish-xatolari',
    category: 'case',
    title: 'Пять самых частых ошибок при внедрении CRM',
    excerpt:
      'Система не работает не потому, что она плохая, а потому, что процесс не описан. Пять случаев из практики и их решения.',
    date: '2 дня назад',
    readingTime: '7 мин',
    author: 'Отдел внедрения',
    featured: true,
    tone: 'sky',
  },
  {
    slug: 'erp-yoki-alohida-dasturlar',
    category: 'technology',
    title: 'Единая ERP или отдельные программы: что обойдется дешевле',
    excerpt: 'Простой расчет стоимости владения за три года и в каком случае какой путь выгоднее.',
    date: 'неделю назад',
    readingTime: '9 мин',
    author: 'Группа архитектуры',
    tone: 'amber',
  },
  {
    slug: 'videokuzatuv-loyihalash',
    category: 'security',
    title: 'Проектирование видеонаблюдения: важно покрытие, а не число камер',
    excerpt: 'Почему расчет покрытия и освещенности дает более дешевый результат, чем «заполнение» объекта камерами.',
    date: '2 недели назад',
    readingTime: '6 мин',
    author: 'Отдел инфраструктуры',
    tone: 'green',
  },
  {
    slug: 'hisobot-qoldan-tizimga',
    category: 'management',
    title: 'Что выигрывает руководитель, когда отчет переходит из ручного режима в систему',
    excerpt: 'Разница между месячным отчетом в Excel и панелью в реальном времени — в скорости принятия решений.',
    date: '3 недели назад',
    readingTime: '5 мин',
    author: 'Группа управленческой отчетности',
    tone: 'slate',
  },
  {
    slug: 'integratsiya-api',
    category: 'technology',
    title: 'Интеграция без замены действующей программы',
    excerpt: 'Практический способ собрать данные в один центр, сохранив бухгалтерию и кассу.',
    date: 'месяц назад',
    readingTime: '8 мин',
    author: 'Группа интеграций',
    tone: 'deep',
  },
  {
    slug: 'hr-davomat-avtomatlashtirish',
    category: 'case',
    title: 'Автоматизация учета посещаемости: от турникета до зарплаты',
    excerpt: 'Подключение данных устройства к HR-системе и отказ от ручного заполнения ежемесячного табеля.',
    date: 'месяц назад',
    readingTime: '6 мин',
    author: 'Отдел внедрения',
    tone: 'violet',
  },
];

export const insightsPage: InsightsPage = {
  meta: {
    title: 'Аналитика — выводы из практики внедрения',
    description:
      'Повторяющиеся ситуации в проектах внедрения, критерии выбора технологий и разбор самых частых ошибок.',
  },
  hero: {
    eyebrow: 'Аналитика',
    title: 'Выводы из практики',
    lead: 'Повторяющиеся ситуации в наших проектах внедрения, критерии выбора технологий и разбор ошибок.',
  },
  empty: 'В этой рубрике пока нет материалов.',
  itemCta: 'Читать',
};
