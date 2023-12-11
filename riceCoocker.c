#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Structure représentant le cuiseur à riz
typedef struct {
    char riceType[50];
    int waterLevel;
    int isCooking;
} RiceCooker;

// Fonction pour régler le type de riz
void setRiceType(RiceCooker *cooker, const char *type) {
    strcpy(cooker->riceType, type);
    printf("Type de riz réglé sur : %s\n", cooker->riceType);
}

// Fonction pour régler le niveau d'eau
void setWaterLevel(RiceCooker *cooker, int level) {
    if (level < 0 || level > 100) {
        fprintf(stderr, "Niveau d'eau invalide. Veuillez choisir une valeur entre 0 et 100.\n");
        exit(EXIT_FAILURE);
    }

    cooker->waterLevel = level;
    printf("Niveau d'eau réglé sur : %d%%\n", cooker->waterLevel);
}

// Fonction pour démarrer la cuisson
void startCooking(RiceCooker *cooker) {
    if (strlen(cooker->riceType) == 0) {
        fprintf(stderr, "Veuillez sélectionner un type de riz avant de commencer la cuisson.\n");
        exit(EXIT_FAILURE);
    }

    if (cooker->waterLevel == 0) {
        fprintf(stderr, "Veuillez définir le niveau d'eau avant de commencer la cuisson.\n");
        exit(EXIT_FAILURE);
    }

    printf("Cuisson en cours...\n");
    cooker->isCooking = 1;

    // Simulation de la cuisson - remplacez cela par une logique de détection réelle
    for (int i = 0; i < 5; i++) {
        // Temporisation d'une seconde
        sleep(1);
    }

    printf("La cuisson est terminée.\n");
    cooker->isCooking = 0;
}

// Fonction pour vérifier l'état de la cuisson
void checkCookingStatus(const RiceCooker *cooker) {
    printf("État du cuiseur à riz - Type de riz: %s, Niveau d'eau: %d%%, Cuisson en cours: %s\n",
           cooker->riceType, cooker->waterLevel, cooker->isCooking ? "Oui" : "Non");
}

int main() {
    // Utilisation du cuiseur à riz
    RiceCooker riceCooker;
    memset(&riceCooker, 0, sizeof(RiceCooker));

    try {
        setRiceType(&riceCooker, "riz blanc");
        setWaterLevel(&riceCooker, 50);
        startCooking(&riceCooker);
        checkCookingStatus(&riceCooker);
    } catch (const char *error) {
        fprintf(stderr, "Erreur: %s\n", error);
        return EXIT_FAILURE;
    }

    return EXIT_SUCCESS;
}
