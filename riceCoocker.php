<?php

class RiceCooker {
    private $riceType = '';
    private $waterLevel = 0;
    private $isCooking = false;

    public function setRiceType($type) {
        $this->riceType = $type;
        echo "Type de riz réglé sur : {$this->riceType}\n";
    }

    public function setWaterLevel($level) {
        if ($level < 0 || $level > 100) {
            throw new Exception('Niveau d\'eau invalide. Veuillez choisir une valeur entre 0 et 100.');
        }

        $this->waterLevel = $level;
        echo "Niveau d'eau réglé sur : {$this->waterLevel}%\n";
    }

    public function startCooking() {
        if (empty($this->riceType)) {
            throw new Exception('Veuillez sélectionner un type de riz avant de commencer la cuisson.');
        }

        if ($this->waterLevel == 0) {
            throw new Exception('Veuillez définir le niveau d\'eau avant de commencer la cuisson.');
        }

        echo "Cuisson en cours...\n";
        $this->isCooking = true;

        // Simulation de la cuisson - remplacez cela par une logique de détection réelle
        sleep(5); // Cuisson pendant 5 secondes (à remplacer par une logique réelle)

        echo "La cuisson est terminée.\n";
        $this->isCooking = false;
    }

    public function checkCookingStatus() {
        echo "État du cuiseur à riz - Type de riz: {$this->riceType}, Niveau d'eau: {$this->waterLevel}%, Cuisson en cours: " . ($this->isCooking ? "Oui" : "Non") . "\n";
    }
}

// Utilisation du cuiseur à riz
$riceCooker = new RiceCooker();

try {
    $riceCooker->setRiceType('riz blanc');
    $riceCooker->setWaterLevel(50);
    $riceCooker->startCooking();
    $riceCooker->checkCookingStatus();
} catch (Exception $error) {
    echo "Erreur: {$error->getMessage()}\n";
}
?>
