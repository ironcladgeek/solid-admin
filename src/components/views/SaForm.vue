<template>
  <form>
    <sa-tabs>
      <sa-tab name="First pane" :selected="true">
        <sa-input label="Sa Input" id="sa-input" type="number" 
                  :has-addon="true" :asterisk="true"
        >
          <template slot="prepend">
            <a class="button">Go</a>
          </template>
          <template slot="append">
            <a class="button">Addon</a>
          </template>
        </sa-input>
        
        <sa-input 
          label="GInput" id="sa-input2" v-model="content" color="info" 
          flow="horizontal" :required="true" text-align="right" :asterisk="true"
        >
        </sa-input>

        <sa-textarea
          label="Sa Textarea1" v-model="text" color='danger' 
          :required="true" text-align="right" :asterisk="true"
        >
        </sa-textarea>

        <sa-textarea
          label="Sa Textarea2" v-model="text" color="success" 
          flow="horizontal" :asterisk="true"
        >
        </sa-textarea>

        <sa-switch v-model="checked1" id="qwe">Primary</sa-switch>
        <sa-switch type="info" id="zxc">Info</sa-switch>
        <sa-switch type="success" id="sdf" v-model="checked2">Success</sa-switch>
        <sa-switch type="warning">Warning</sa-switch>
        <sa-switch type="danger">Danger</sa-switch>
        <p>Checked1: {{ checked1 }}</p>
        <p>Checked2: {{ checked2 }}</p>
      </sa-tab>

      <sa-tab name="2nd Pane">
        <div class="field">
          <label class="label" for="username">Username</label>
          <p class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma" id="username">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
          </p>
          <p class="help is-success">This username is available</p>
        </div>
      
        <div class="field">
          <label class="label">Email</label>
          <p class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-warning"></i>
            </span>
          </p>
          <p class="help is-danger">This email is invalid</p>
        </div>
      
        <div class="field">
          <label class="label">Subject</label>
          <p class="control">
            <span class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
      
        <div class="field">
          <label class="label">Message</label>
          <p class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </p>
        </div>
      
        <div class="field">
          <p class="control">
            <label class="checkbox">
              <input type="checkbox"> I agree to the
              <a href="#">terms and conditions</a>
            </label>
          </p>
        </div>
      
        <div class="field">
          <p class="control">
            <label class="radio">
              <input type="radio" name="question"> Yes
            </label>
            <label class="radio">
              <input type="radio" name="question"> No
            </label>
          </p>
        </div>
      </sa-tab>

      <sa-tab name="Something"></sa-tab>
    </sa-tabs>

    <hr>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-primary">Submit</button>
      </p>
      <p class="control">
        <button class="button is-link">Cancel</button>
      </p>
    </div>
  </form>
</template>

<script>
import SaInput from '../features/form/SaInput.vue';
import SaTextarea from '../features/form/SaTextarea.vue';
import SaTabs from '../features/tab/SaTabs.vue';
import SaTab from '../features/tab/SaTabPane.vue';
import SaSwitch from '../features/form/SaSwitch.vue';

export default {
  components: {
    'sa-input'   : SaInput,
    'sa-textarea': SaTextarea,
    'sa-tabs'    : SaTabs,
    'sa-tab'     : SaTab,
    'sa-switch'  : SaSwitch
  },

  data() {
    return {
      content: 'Freebie',
      text   : 'lorem ipsum switch borden ...',
      checked1: true,
      checked2: false
    }
  }
}
</script>
