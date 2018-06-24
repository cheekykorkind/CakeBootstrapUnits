<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User[]|\Cake\Collection\CollectionInterface $users
 */
?>
<div class="d-flex flex-row">
  <textarea id="textarea-input"></textarea>
  <button type="button" class="btn" id="add-message-form">Add message form</button>
</div>
<div class="d-flex flex-column message-frame">

</div>

<?= $this->Html->script('emulate_slack_message.js'); ?>



    <!-- <div class="d-flex flex-column message-form1">
    <div class="btn-toolbar justify-content-between">
      <div class="btn" style="color : none" disabled='disabled'>Item name</div>
      <div class="btn-group btn-group-sm message-form1-delete-fix" style="display : none">
        <button type="button" class="btn btn-secondary">Delete</button>
        <button type="button" class="btn btn-secondary">Change</button>
      </div>
    </div>
    <div class="d-flex flex-column">
      <textarea></textarea>
    </div>
    <div class="d-flex flex-row">
      <div class="btn-group message-form1-cancel-ok" style="display : none">
        <button type="button" class="btn btn-light mr-5">Cancel</button>
        <button type="button" class="btn btn-success mr-5">Ok</button>
      </div>
    </div>
  </div> -->