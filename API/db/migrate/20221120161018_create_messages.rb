class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.belongs_to :user, null: false,index: true, foreign_key: true
      t.belongs_to :chat, null: false,index: true, foreign_key: true
      t.timestamps
    end
  end
end
