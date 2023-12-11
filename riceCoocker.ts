// Installer les types de paquet via npm install @types/node
import * as readlineSync from 'readline-sync';

class RiceCooker {
  private riceType: string = '';
  private waterLevel: number = 0;
  private isCooking: boolean = false;

  setRiceType(type: string): void {
    this.riceType = type;
    console.log(`Type de riz réglé sur : ${this.riceType}`);
  }

  setWaterLevel(level: number): void {
    if (level < 0 || level > 100) {
      throw new Error('Niveau d\'eau invalide. Veuillez choisir une valeur entre 0 et 100.');
    }

    this.waterLevel = level;
    console.log(`Niveau d'eau réglé sur : ${this.waterLevel}%`);
  }

  startCooking(): void {
    if (this.riceType === '') {
      throw new Error('Veuillez sélectionner un type de riz avant de commencer la cuisson.');
    }

    if (this.waterLevel === 0) {
      throw new Error('Veuillez définir le niveau d\'eau avant de commencer la cuisson.');
    }

    console.log('Cuisson en cours...');
    this.isCooking = true;

    // Simulation de la cuisson - remplacez cela par une logique de détection réelle
    setTimeout(() => {
      console.log('La cuisson est terminée.');
      this.isCooking = false;
    }, 5000); // Cuisson pendant 5 secondes (à remplacer par une logique réelle)
  }

  checkCookingStatus(): void {
    console.log(`État du cuiseur à riz - Type de riz: ${this.riceType}, Niveau d'eau: ${this.waterLevel}%, Cuisson en cours: ${this.isCooking}`);
  }
}

// Utilisation du cuiseur à riz
const riceCooker = new RiceCooker();

try {
    riceCooker.setRiceType('riz blanc');
    riceCooker.setWaterLevel(50);
    riceCooker.startCooking();
    riceCooker.checkCookingStatus();
  } catch (error: any) {
    console.error(`Erreur: ${error.message}`);
  }
  
