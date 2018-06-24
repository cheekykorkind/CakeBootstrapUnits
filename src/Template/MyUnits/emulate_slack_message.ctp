<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User[]|\Cake\Collection\CollectionInterface $users
 */
?>
<div class="d-flex flex-row justify-content-between">
  <div>Item name</div>
  <div class="btn-group btn-group-sm" role="group">
    <button type="button" class="btn btn-secondary">Delete</button>
    <button type="button" class="btn btn-secondary">Change</button>
  </div>
</div>
<div class="d-flex flex-column">
  <?= $this->Form->control(
    'keep' ,
    [
      'type' => 'textarea',
      'placeholder' => 'Keep',
      'label'=>false
    ]
  ) ?>
</div>
<div class="d-flex flex-row">
  <button type="button" class="btn btn-light mr-5">Light</button>
  <button type="button" class="btn btn-success mr-5">Success</button>
</div>





  