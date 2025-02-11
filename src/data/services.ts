import { Brain, Bot, MessageCircle, BarChart, Lock, Cloud } from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "1",
    title: "אוטומציה קוגניטיבית",
    description: "שילוב AI ולמידת מכונה בתהליכים עסקיים",
    icon: Brain,
    examples: [
      "זיהוי טקסט וקול",
      "עיבוד שפה טבעית",
      "קבלת החלטות אוטומטית"
    ]
  },
  {
    id: "2",
    title: "אוטומציית תהליכים",
    description: "ייעול תהליכים עסקיים חוזרים",
    icon: Bot,
    examples: [
      "מילוי טפסים אוטומטי",
      "העברת נתונים בין מערכות",
      "תזמון משימות"
    ]
  },
  {
    id: 3,
    title: "תקשורת חכמה עם לקוחות",
    description: "מערכת תקשורת מבוססת AI המגיבה ללקוחות באופן מיידי, 24/7",
    examples: [
      "צ'אטבוט חכם עם NLP",
      "מענה מותאם אישית",
      "למידה מתמדת והשתפרות"
    ],
    icon: MessageCircle
  },
  {
    id: 4,
    title: "ניתוח נתונים מתקדם",
    description: "ניתוח חכם של נתונים עסקיים באמצעות AI",
    examples: [
      "תחזיות מדויקות",
      "זיהוי מגמות אוטומטי",
      "המלצות מבוססות דאטה"
    ],
    icon: BarChart
  },
  {
    id: 5,
    title: "אוטומציה מאובטחת",
    description: "אוטומציה רובוטית (RPA) עם אבטחה מתקדמת",
    examples: [
      "בירור צרכים מקיף",
      "התאמה לתהליכים קיימים",
      "בקרה ותיעוד מלא"
    ],
    icon: Lock
  },
  {
    id: 6,
    title: "שילוב טכנולוגיות מתקדמות",
    description: "אוטומציה בענן עם כלים מתקדמים כמו Make ו-Power Automate",
    examples: [
      "חיבור מותאם בין מערכות",
      "זרימת מידע חלקה",
      "פתרון מקיף לכל צורך"
    ],
    icon: Cloud
  }
];