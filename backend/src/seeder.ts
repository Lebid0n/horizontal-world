import { AppDataSource } from "./data-source";
import { Exercise } from "./entities/Exercise";
import { Progression } from "./entities/Progression";
import exercisesData from "./seeders/exercises.json";
import progressionsData from "./seeders/progressions.json";

export const seed = async () => {
  // Get repositories for our entities
  const exerciseRepository = AppDataSource.getRepository(Exercise);
  const progressionRepository = AppDataSource.getRepository(Progression);

  try {
    console.log("Start seeding...");

    // --- SEED EXERCISES FIRST ---
    console.log("Seeding exercises...");
    const exerciseEntities = exercisesData.map((data) => {
      const exercise = new Exercise();
      exercise.name = data.name;
      exercise.slug = data.slug;
      exercise.description = data.description;
      exercise.difficulty = data.difficulty;
      exercise.videoUrl = data.videoUrl;
      exercise.imageUrl = data.imageUrl;
      return exercise;
    });

    await exerciseRepository.save(exerciseEntities);
    console.log("Exercises have been seeded!");

    // --- SEED PROGRESSIONS SECOND ---
    console.log("Seeding progressions...");

    for (const progressionData of progressionsData) {
      // 1. Find the progression exercise entity by its slug
      const progressionExercise = await exerciseRepository.findOneBy({
        slug: progressionData.progression_slug,
      });

      // 2. Find the target exercise entity by its slug
      const targetExercise = await exerciseRepository.findOneBy({
        slug: progressionData.target_slug,
      });

      // 3. If both are found, create and save the progression relationship
      if (progressionExercise && targetExercise) {
        const progression = new Progression();
        progression.exercise = progressionExercise;
        progression.targetExercise = targetExercise;
        progression.order = progressionData.progression_order;

        await progressionRepository.save(progression);
      } else {
        console.warn(
          `Could not find exercises for progression: ${progressionData.progression_slug} -> ${progressionData.target_slug}`,
        );
      }
    }
    console.log("Progressions have been seeded!");

    console.log("Seeding finished!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await AppDataSource.destroy();
    console.log("Connection closed.");
  }
};
