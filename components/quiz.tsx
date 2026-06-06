"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight, HelpCircle, Trophy } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"
import { quizData } from "@/data/quiz-data"

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const { width, height } = useWindowSize()

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const totalQuestions = quizData.questions.length
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  const handleAnswerSelect = (value: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(value)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
    setIsAnswerSubmitted(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer
  const percentage = Math.round((score / totalQuestions) * 100)

  return (
    <div className="max-w-3xl mx-auto">
      {!quizCompleted ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">OS Quiz</h1>
            <div className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
          </div>

          <Progress value={progress} className="h-2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 shadow-lg">
                <CardHeader className="bg-muted/50 rounded-t-lg">
                  <CardTitle className="text-xl">
                    {currentQuestion.number}. {currentQuestion.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <RadioGroup value={selectedAnswer || ""} className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <div
                        key={option.label}
                        className={`flex items-center space-x-2 rounded-lg border p-4 transition-colors ${
                          isAnswerSubmitted
                            ? option.label === currentQuestion.correctAnswer
                              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                              : selectedAnswer === option.label
                                ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                : "border-gray-200 dark:border-gray-800"
                            : selectedAnswer === option.label
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 dark:border-gray-800"
                        }`}
                        onClick={() => handleAnswerSelect(option.label)}
                      >
                        <RadioGroupItem
                          value={option.label}
                          id={option.label}
                          disabled={isAnswerSubmitted}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-current">
                          {option.label}
                        </div>
                        <Label htmlFor={option.label} className="flex-1 cursor-pointer text-base font-medium">
                          {option.text}
                        </Label>
                        {isAnswerSubmitted && option.label === currentQuestion.correctAnswer && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                        {isAnswerSubmitted &&
                          selectedAnswer === option.label &&
                          option.label !== currentQuestion.correctAnswer && (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          )}
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  {isAnswerSubmitted && (
                    <Alert className={isCorrect ? "border-green-500" : "border-red-500"}>
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                        <AlertTitle>{isCorrect ? "Correct!" : "Incorrect!"}</AlertTitle>
                      </div>
                      <AlertDescription className="mt-2">{currentQuestion.reason}</AlertDescription>
                    </Alert>
                  )}
                  <div className="flex justify-between w-full">
                    <Button
                      variant="outline"
                      onClick={handlePreviousQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="flex items-center gap-1"
                    >
                      <ChevronLeft className="h-4 w-4" /> Previous
                    </Button>
                    {!isAnswerSubmitted ? (
                      <Button
                        onClick={handleSubmitAnswer}
                        disabled={!selectedAnswer}
                        className="flex items-center gap-1"
                      >
                        Submit Answer
                      </Button>
                    ) : (
                      <Button onClick={handleNextQuestion} className="flex items-center gap-1">
                        {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next"}
                        {currentQuestionIndex < totalQuestions - 1 && <ChevronRight className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          {percentage >= 70 && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full flex items-center justify-center bg-primary/10 border-4 border-primary">
                  <Trophy className="h-16 w-16 text-primary" />
                </div>
                <div className="absolute -right-2 -top-2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  {percentage}%
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
            <p className="text-xl mb-6">
              You scored {score} out of {totalQuestions} questions correctly.
            </p>
            <div className="mb-8">
              {percentage >= 90 ? (
                <Alert className="bg-green-50 border-green-500 dark:bg-green-900/20">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <AlertTitle>Excellent!</AlertTitle>
                  <AlertDescription>You have an outstanding understanding of operating systems!</AlertDescription>
                </Alert>
              ) : percentage >= 70 ? (
                <Alert className="bg-blue-50 border-blue-500 dark:bg-blue-900/20">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <AlertTitle>Good job!</AlertTitle>
                  <AlertDescription>You have a solid grasp of operating system concepts.</AlertDescription>
                </Alert>
              ) : percentage >= 50 ? (
                <Alert className="bg-yellow-50 border-yellow-500 dark:bg-yellow-900/20">
                  <HelpCircle className="h-5 w-5 text-yellow-500" />
                  <AlertTitle>Not bad!</AlertTitle>
                  <AlertDescription>You have a basic understanding, but there's room for improvement.</AlertDescription>
                </Alert>
              ) : (
                <Alert className="bg-red-50 border-red-500 dark:bg-red-900/20">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <AlertTitle>Keep studying!</AlertTitle>
                  <AlertDescription>
                    You might need to review operating system concepts more thoroughly.
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <Button onClick={restartQuiz} size="lg" className="px-8">
              Restart Quiz
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

