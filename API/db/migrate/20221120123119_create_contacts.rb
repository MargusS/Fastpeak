class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.references :user, null: false,index: true, foreign_key: true
      t.references :friend, references: :users, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
