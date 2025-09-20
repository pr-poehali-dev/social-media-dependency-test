import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Question {
  id: number;
  text: string;
  options: Array<{ value: number; label: string }>;
}

interface TestResult {
  score: number;
  level: string;
  description: string;
  recommendations: string[];
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Замечаете, что проводите в онлайне больше времени, чем намеревались?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  },
  {
    id: 2,
    text: "Пренебрегаете домашними делами, чтобы подольше побродить в сети?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  },
  {
    id: 3,
    text: "Предпочитаете пребывание в сети общению с близкими людьми?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  },
  {
    id: 4,
    text: "Заводите знакомства с пользователями интернета, находясь в онлайне?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  },
  {
    id: 5,
    text: "Раздражаетесь из-за того, что окружающие интересуются количеством времени, проводимым вами в сети?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  },
  {
    id: 6,
    text: "Отмечаете, что перестали делать успехи в учебе или работе, так как слишком много времени проводите в сети?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  },
  {
    id: 7,
    text: "Проверяете электронную почту раньше, чем сделаете что-то другое, более необходимое?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  },
  {
    id: 8,
    text: "Отмечаете, что снижается продуктивность деятельности из-за увлечения интернетом?",
    options: [
      { value: 1, label: "никогда" },
      { value: 2, label: "редко" },
      { value: 3, label: "часто" },
      { value: 4, label: "регулярно" },
      { value: 5, label: "постоянно" }
    ]
  }
];

const getTestResult = (score: number): TestResult => {
  if (score <= 16) {
    return {
      score,
      level: "Низкий уровень",
      description: "У вас здоровые отношения с интернетом и социальными сетями. Вы умеете контролировать время, проводимое онлайн, и это не влияет негативно на вашу повседневную жизнь.",
      recommendations: [
        "Продолжайте поддерживать здоровый баланс между онлайн и офлайн активностями",
        "Используйте интернет как инструмент для достижения конкретных целей",
        "Регулярно делайте цифровые детокс-дни для поддержания ментального здоровья"
      ],
      color: "bg-green-100 text-green-800"
    };
  } else if (score <= 24) {
    return {
      score,
      level: "Умеренный уровень",
      description: "Иногда вы проводите в интернете больше времени, чем планировали, но это пока не критично. Стоит обратить внимание на некоторые паттерны поведения.",
      recommendations: [
        "Установите четкие временные рамки для использования соцсетей",
        "Используйте приложения для отслеживания экранного времени",
        "Создайте 'зоны без гаджетов' в доме (спальня, обеденный стол)",
        "Планируйте офлайн активности и хобби"
      ],
      color: "bg-yellow-100 text-yellow-800"
    };
  } else if (score <= 32) {
    return {
      score,
      level: "Повышенный уровень",
      description: "Использование интернета начинает негативно влиять на вашу жизнь. Вы можете пренебрегать важными делами и отношениями ради времени в сети.",
      recommendations: [
        "Рассмотрите возможность цифрового детокса на несколько дней",
        "Обратитесь к специалисту по зависимостям для консультации",
        "Установите строгие ограничения на использование соцсетей",
        "Найдите замещающие активности (спорт, творчество, общение вживую)",
        "Используйте техники осознанности для контроля импульсов"
      ],
      color: "bg-orange-100 text-orange-800"
    };
  } else {
    return {
      score,
      level: "Высокий уровень",
      description: "У вас серьезные признаки интернет-зависимости. Это значительно влияет на вашу работу, учебу, отношения и общее качество жизни. Необходима профессиональная помощь.",
      recommendations: [
        "Немедленно обратитесь к психологу или психотерапевту",
        "Рассмотрите возможность групповой терапии по интернет-зависимости",
        "Полностью исключите использование соцсетей на определенный период",
        "Создайте структурированный распорядок дня без интернета",
        "Попросите поддержки у близких в контроле использования гаджетов",
        "Изучите техники когнитивно-поведенческой терапии"
      ],
      color: "bg-red-100 text-red-800"
    };
  }
};

export default function SocialMediaTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const testResult = getTestResult(totalScore);
    setResult(testResult);
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[questions[currentQuestion]?.id] !== undefined;

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Результаты теста</h1>
            <p className="text-muted-foreground text-lg">
              Анализ вашего уровня зависимости от социальных сетей
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-6">
              <div className="space-y-4">
                <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="BarChart3" size={48} className="text-primary" />
                </div>
                <Badge className={`${result.color} px-6 py-2 text-lg font-semibold`}>
                  {result.level}
                </Badge>
                <div className="text-6xl font-bold text-primary">
                  {result.score}<span className="text-2xl text-muted-foreground">/40</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-3">
                  <Icon name="Lightbulb" size={24} />
                  Персональные рекомендации
                </h3>
                <div className="grid gap-4">
                  {result.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Info" size={24} className="text-blue-600 shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-900">Важная информация</h4>
                    <p className="text-blue-800 leading-relaxed">
                      Этот тест является ориентировочным инструментом самооценки и не заменяет 
                      профессиональную диагностику. При серьезных проблемах обратитесь к специалисту.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button onClick={resetTest} size="lg" className="px-8">
                  <Icon name="RotateCcw" size={20} className="mr-2" />
                  Пройти тест заново
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Тест на зависимость от социальных сетей
          </h1>
          <p className="text-muted-foreground text-lg">
            Определите ваш уровень цифровой зависимости и получите персональные рекомендации
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-muted-foreground">
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl leading-relaxed">
                {questions[currentQuestion]?.text}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3">
                {questions[currentQuestion]?.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                    className={`p-4 text-left rounded-lg border-2 transition-all duration-200 hover:bg-muted/50 ${
                      answers[questions[currentQuestion].id] === option.value
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground/30'
                      }`}>
                        {answers[questions[currentQuestion].id] === option.value && (
                          <div className="w-full h-full rounded-full bg-primary scale-50" />
                        )}
                      </div>
                      <span className="text-lg capitalize">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="px-6"
                >
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Назад
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="px-6"
                >
                  {currentQuestion === questions.length - 1 ? (
                    <>
                      Получить результат
                      <Icon name="CheckCircle" size={20} className="ml-2" />
                    </>
                  ) : (
                    <>
                      Далее
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}