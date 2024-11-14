import { FlashcardType } from "./type/type"
import Flashcard from "./Flashcard"

type flashcardlistProps={
  flashcards:FlashcardType[]
}

const FlashcardList = ({flashcards}:flashcardlistProps) => {
  return (
    <div className="card-grid">
      {flashcards.map(flashcard=>(
        <Flashcard flashcard={flashcard}></Flashcard>
      ))}
    </div>
  )
}

export default FlashcardList