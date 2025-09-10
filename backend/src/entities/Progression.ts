import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Exercise } from "./Exercise";

@Entity("progressions")
export class Progression {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Exercise, (exercise) => exercise.progressions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "exercise_id" })
  exercise: Exercise;

  @ManyToOne(() => Exercise, (exercise) => exercise.progressionTargets, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "target_exercise_id" })
  targetExercise: Exercise;

  @Column("int")
  order: number; // 'progression_order' is a bit long, 'order' is standard
}
