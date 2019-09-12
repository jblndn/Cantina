<template>
    <form action="">
        <div class="form-container">
            <label for="titre">Titre:</label>
            <input type="text" id="titre">
        </div>
        <div class="form-container">
            <label for="description">Description:</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>
        <div class="form-container">
            <label for="niveau">Niveau:</label>
            <select name="niveau" id="niveau">
                <option value="padawan">Padawan</option>
                <option value="jedi">Jedi</option>
                <option value="maitre">Maître</option>
            </select>
        </div>
        <div class="form-container">
            <label for="personnes">Nombre de personnes :</label>
            <input type="number" name="personnes" id="personnes" step="1">
        </div>
        <div class="form-container">
            <label for="time">Temps de préparation (en min) :</label>
            <input type="number" name="time" id="time" step="5">
        </div>
        <div class="form-container">
            <label for="ingredients">Ingrédients :</label>
            <ul>
                <li class="one-ingredient">
                    <input type="number">
                    <select name="mesure" id="mesure">
                        <option value="empty"> </option>
                        <option value="l">l</option>
                        <option value="dl">dl</option>
                        <option value="cl">cl</option>
                        <option value="ml">ml</option>
                        <option value="g">g</option>
                        <option value="dg">dg</option>
                        <option value="cg">cg</option>
                        <option value="mg">mg</option>
                    </select>
                    <button>
                        <i class="fas fa-times"></i>
                    </button>
                </li>
            </ul>
            <button>
                Ajouter un ingrédient
            </button>
        </div>
        <div class="form-container">
            <label for="etapes">Etapes :</label>
            <ul>
                <li class="one-step">
                    <textarea name="etape" id="etape" cols="30" rows="10"></textarea>
                    <button>
                        <i class="fas fa-times"></i>
                    </button>
                </li>
            </ul>
        </div>
        <div class="form-container">
            <label for="photo">Photo :</label>
            <input type="image">
        </div>
    </form>
</template>

<script>
export default {
    name: 'Form',
    props: {
        recipe: {
            type: Object,
            default: function(){
                return {
                    id: null,
                    titre: '',
                    description: '',
                    niveau: '',
                    personnes: '',
                    tempsPreparation: '',
                    ingredients: Object,
                    etapes: Object,
                    photo: '',
                }
            }
        }
    }
}
</script>


