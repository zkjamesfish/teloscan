/* eslint-disable max-len*/

export default {
    locale: {
        current_language_name: 'Français',
    },
    pages: {
        staking: {
            sign_in: 'Veuillez vous connecter à l\'aide de votre portefeuille afin de pouvoir intéragir avec notre interface de staking',
            note_unstaking_period: 'Veuillez noter qu\'il y a une période d\'unstacking de {period}',
            claim_tlos: 'Réclamer votre TLOS',
            add_stlos_to_metamask: 'Ouvrez le dialogue MetaMask pour ajouter sTLOS',
            metamask_fox_logo: 'MetaMask logo renard',
            cancel: 'Annuler',
            stake_tlos_confirm: 'En continuant vous miserez vos TLOS en échange de sTLOS. ' +
                'Les sTLOS peuvent être converti en TLOS à tout moment à l\'aide de l\'onglet Unstake.',
            stake_tlos_confirm_2a: 'Après que les TLOS sont unstake, ils seront vérouillés pour une période de', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ ' après quoi ils seront retirable sur votre compte à partir de l\'onglet Retrait.',
            stake_tlos_confirm_3: 'Voulez-vous continuer?',
            stake_tlos: 'Staker vos TLOS',
            stake_tlos_subheader: 'Staker vos TLOS contre des sTLOS vous permet d\'accèder à un revenu passif ainsi qu\'à diverses applications DeFi, ' +
                'vous permettant d\'augmenter encore plus le rendement. Le taux de conversion de TLOS à sTLOS change au fur et à mesure que le bassin de récompense se rempli,  ' +
                'c\'est pourquoi le montant de sTLOS reçu est moins important que le montant de Telos déposé. Les récompenses s\'accumulent ' +
                'automatiquement et vous n\'avez donc pas besoin de les réclamer.',
            receive_stlos: 'Recevez sTLOS',
            available: '{balanceTlos} Disponible',
            insufficient_tlos_balance: 'Solde de TLOS non suffisant pour stake',
            login_using_an_evm_wallet: 'Connectez vous à l\'aide d\'un portefeuille EVM',
            wallet_not_connected: 'Portefeuille non connecté',
            click_to_input_full_wallet_balance: 'Cliquez pour choisir le solde entier de votre portefeuille\n\n' +
                'Le solde montré est réduit de 1 TLOS afin de pouvoir régler les frais de gaz.\n' +
                'Solde exact (moins les frais de gaz approximatifs):\n' +
                '{prettyBalance} TLOS',
            loading: 'Chargement...',
            get_more_tlos: 'Obtenez plus de TLOS',
            connect_wallet: 'Connectez votre portefeuille',
            minutes: 'minutes',
            hours: 'heures',
            days: 'jours',
            unstake: 'Unstaker',
            stake: 'Staker',
            withdraw: 'Retrait',
            telos_evm_staking: 'Staking Telos EVM',
            stake_tlos_earn_interest: 'Stakez votre TLOS contre des sTLOS pour gagner des interêts à partir du bassin de récompense',
            staked: 'Staké',
            unstaked: 'Unstaké',
            tooltip_1: 'APY: Pourcentage annuel de rendement\n\n Ce pourcentage répresente les interêts gagnés sur un an et prend.\n\n' +
                'Les interêts s\'accumulent automatiquement toute les 30 minutes (\'auto-compounding\'). Ce pourcentage n\'est pas fixe,' +
                'ce qui veut dire qu\'il changera au fur et à mesure du temps suivant le total de TLOS stake à la fois sur l\'EVM et la chaîne native. ' +
                'Les récompenses sont distribués à partir d\'un bassin de récompense communautaire directement dans le contract sTLOS.',
            tooltip_2: 'TVL: Valeur Totale Vérouillé\n\nLa valeur actuelle, en TLOS, de tout les actifs déposés dans le contrat sTLOS ' +
                '(Staked TLOS), c\'est à dire la somme de tout les TLOS stakés sur l\'EVM Telos à l\'instant T.',
            tooltip_3: 'Staké\n\n' +
                'Le montant total staké par le compte connecté, c\'est à dire ' +
                ' votre solde de jetons sTLOS, ainsi que sa valeur en TLOS',
            tooltip_4: 'Unstaké\n\n' +
                'La valeur total de TLOS que vous avez unstaké, vérouillé ou non.\n\n' +
                'Quand vous unstakez\u2014c\'est à dire récuperez\u2014 un montant de sTLOS, le montant équivalent de ' +
                'TLOS est envoyé dans un contract de dépot fiduciare où il est verrouillé pour {unlockPeriod}; pendant cette période, ' +
                'vous ne pourrez pas intéragir avec voc TLOS.\n\n' +
                'Une fois la période de vérouillage finie, vous pourrez éffectuer un retrait de vos TLOS dévérouillés ' +
                ' à partir de l\'onglet Retrait sur cette page, il sera alors ajouté au solde TLOS de votre compte.',
            confirm_unstake_1a: 'Continuer va échanger vos sTLOS contre des TLOS. ' +
                'Les TLOS unstaké vont rester vérouillé pour une période de', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'après quoi ils peuvent être retirer sur votre compte à partir de l\'onglet Retrait',
            confirm_unstake_2a: 'Attention, vous pouvez unstake encore', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'fois avant ' +
                'd\'atteindre le nombre d\'unstake simultané maximum. Si vous atteignez ce maximum vous devrez' +
                'retirer vos TLOS pour continuer à unstaker. Si vous n\'avez pas encore de TLOS retirable il vous faudra' +
                'attendre jusqu\'a que la durée de verrouillage soit écoulée avant de pouvoir les retirer et de unstake plus de sTLOS. -',
            unstake_stlos_for_tlos: 'Unstaker vos sTLOS contre des TLOS',
            unstake_stlos: 'Unstaker vos sTLOS',
            receive_tlos: 'Recevez TLOS',
            amount: 'Montant',
            time_remaining: 'Temps restant',
            full_staked_balance_tooltip: 'Cliquez pour saisir le solde total staké\n\n' +
                'Solde précis (moins frais de gaz approximatifs):\n' +
                '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Connectez vous à l\'aide d\'un portefeuille EVM',
            max_unstake_transactions_reached: 'Vous avez atteint le nombre maximum de unstake concurents, ' +
                'veuillez retirer le TLOS disponible ou attendre que vos unstake en cours soit dévérouillés avant de réessayer.',
            click_to_change_time_format: 'Cliquer pour changer le format du temps',
            unstaking: 'Unstaking',
            available_to_withdraw: 'Disponible pour retrait',
            withdraw_tlos: 'Retirer vos TLOS',
            withdraw_successful: 'Retrait effectué ! Voir la transaction:',
            no_withdrawable_positions: 'Aucune position retirable',
            you_have_unlocked_tlos: 'Vous avez des TLOS déverrouillés !',
            stake_tlos_success: 'Stake effectuée ! Voir la transaction: ',
            unstake_stlos_success: 'Unstake effectuée ! Voir la transaction: ',
            deposit_failed: 'Échec lors de dépot de TLOS: { message }',
            redeem_failed: 'Impossible de convertir vos sTLOS en TLOS: { message }',
            fetch_balance_error: 'Impossible de récuperer le compte: { message }',
            fetch_stlos_balance_error: 'Échec de récupération du solde sTLOS: { message }',
            fetch_stlos_value_error: 'Échec de récupération de la valeur du solde sTLOS: { message }',
            fetch_unstaked_balance_error: 'Échec de récupération du total de TLOS unstaked: { message }',
            fetch_unlocked_balance_error: 'Échec de récupération du solde de sTLOS récupérable: { message }',
            fetch_escrow_deposits_error: 'Échec de récupération des dépôts fiduciaire: { message }',
            fetch_conversion_rate_error: 'Échec de récupération du taux de conversion TLOS->sTLOS: { message }',
            fetch_stlos_contract_error: 'Échec de récupération du contrat sTLOS: { message }',
            fetch_escrow_contract_error: 'Échec de récupération du contrat des dépôts fiduciaire: { message }',
            fetch_unstake_period_error: 'Échec de récupération de la période d\'unstaking: { message }',
            fetch_account_error: 'Échec de récupération du compte: { message }',
            fetch_stlos_tvl_error: 'Échec de récupération de la valeur totale verouillée (VTV) de sTLOS: { message }',
            fetch_stlos_apy_error: 'Échec de récupération de l\'APY sTLOS: { message }',
            fetch_max_deposits_error: 'Échec de récupération du nombre de dépôts maximum sur le contract des dépôts fiduciaire: { message }',
            convert_tlos_to_stlos_error: 'Impossible de convertir TLOS en sTLOS: { message }',
            convert_stlos_to_tlos_error: 'Impossible de convertir sTLOS en TLOS: { message }',
            unstake_stlos_error: 'Échec lors de l\'unstake de sTLOS { message }',
            withdraw_failed: 'Échec du retrait des TLOS déverrouillés: { message }',
        },
        issuer: 'Émetteur',
        account_not_found: 'Nous n\'avons pas pu trouver ce compte',
        approvals: 'Permissions',
        supported_interfaces: 'Interface(s) supporté(s)',
        explore_transactions: 'Explorer les transactions',
        recent_transactions: 'Transactions récentes',
        telos_evm_explorer: 'Exploreur Telos EVM',
        rpc_endpoints: 'RPC',
        monitor: 'Moniteur',
        oops: 'Oops. Il n\'y a rien ici...',
        go_home: 'Accueil',
        minted: 'Frappé(s)',
        holders: 'Détenteurs',
        evm_holders: 'Tout détenteurs sur Telos EVM',
        total_nfts_minted: 'Total des NFTs crés dans cette collection',
        telos_supply: 'Réserve Telos EVM',
        select_sol_file: 'Sélectionnez votre fichier .sol pour l\'envoyer',
        select_json_file: 'Sélectionnez un fichier avec un objet JSON standard à envoyer',
        paste_contract_contents: 'vous devez séléctionner un fichier à envoyer ou utiliser le boutton de bascule pour pouvoir coller le contenu de votre contrat',
        contract_address: 'Adresse du contrat',
        enter_contract_address: 'Veuillez saisir une adresse valide, ex: \'0x0123...\'',
        invalid_address_format: 'Format de l\'adresse invalide',
        compiler_version: 'Version du compiler',
        select_compiler_version: 'sélectionner la version du compiler',
        eg_contracts: 'e.g., \'contrats/\'',
        contract_file_directory_path: 'Chemin des fichiers du contrat (laissez vide si non applicable)',
        invalid_path_format: 'le chemin doit finir avec une barre oblique /',
        upload_file: 'envoyer le fichier',
        text_input: 'entrée texte',
        runs_value_for_optimization: 'Nombre d\'itération d\'optimisation',
        constructor_arguments: 'Arguments du constructeur',
        comma_seperated_values: 'valeurs séparées par une virgule ex: Bob,123,0x12345...',
        no_trailing_commas: 'pas de virgule finale',
        paste_contract_code_here: 'copier/coller le code du contract ici...',
        enter_contract_text: 'Entrer ou coller le texte du contat',
        verify_contract: 'Verifier le contrat',
        reset: 'Réinitialiser',
        gas_used: 'Gaz utilisé',
        transactions: 'Transactions',
        account: 'Compte',
        contract: 'Contrat',
        transfers_title: 'Transferts { type }:',
        loading_transfers: 'Chargement des transferts',
        loading_approvals: 'Chargement des permissions',
        erc20_transfers: 'Transferts ERC20',
        erc721_transfers: 'Transferts ERC721',
        erc1155_transfers: 'Transferts ERC1155',
        tokens: 'Jetons',
        created_at_trx: 'Création',
        by_address: 'Par',
        number_used_once: 'Nombre utilisé une fois (nonce)',
        native_account: 'Compte natif',
        balance: 'Solde',
        view_source_prompt: 'Ce contrat à été vérifié. Vous pouvez consulter son code source et metadonnées dans l\'onglet \'contrat\'',
        account_url: '{ domain }/account/{ account }',
        tlos_balance: '{ balance } TLOS',
        couldnt_retreive_metadata_for_address: 'Impossible de récupérer les metadonnées pour { address }: { message }',
        transaction_details: 'Détails de la transaction',
        transaction_not_found: 'Non trouvé: { hash }',
        general: 'Général',
        details: 'Détails',
        logs: 'Logs',
        internal_txns: 'Transactions Internes',
        transaction_hash: 'Hash de la transaction ',
        click_to_change_date_format: 'Cliquer pour changer le format de la date',
        block_number: 'Numéro de bloc',
        from: 'Expéditeur',
        to: 'Destination',
        date: 'Date',
        success: 'Succès',
        failure: 'Échec',
        status: 'Statut',
        balance_gwei: '{ amount } GWEI',
        balance_tlos: '{ amount } TLOS',
        error_message: 'Message d\'Erreur',
        contract_function: 'Fonction appelée',
        function_parameters: 'Paramètres de la fonction',
        deployed_contract: 'Contrat Déployé',
        click_to_show_in_wei: 'Cliquez pour voir en wei',
        gas_price_charged: 'Prix du gaz',
        gas_fee: 'Frais de gaz',
        gas_limit: 'Limite de gaz',
        nonce: 'Nonce',
        input: 'Entrée',
        output: 'Sortie',
        value: 'Valeur',
    },
    components: {
        known_tokens: 'Jetons connus',
        other_tokens: 'Jetons inconnus',
        no_balances_found: 'Aucun jetons erc20 trouvés pour cette adresse',
        internal_txns: 'Transactions Internes',
        n_internal_txns: '{ amount } transactions internes',
        none: 'Aucun',
        verify_prompt: 'Ce contrat n\'a pas encore été vérifié. Voulez vous envoyer le code et metadata du contrat afin de le vérifier maintenant ?',
        verify_contract: 'Verifiez le contrat',
        search_evm_address_failed: 'La recherche d\'une addresse EVM lié au compte natif { accountName } a échouée. Vous pouvez en créer une en vous connectant sur wallet.telos.net',
        unknown_web3_login_type: 'Type de login web3 inconnu: { provider }',
        connect_wallet: 'Connectez votre portefeuille',
        view_address: 'Voir l\'adresse',
        disconnect: 'Déconnexion',
        disable_wallet_extensions: 'Désactiver l\'extension portefeuille ou définisez le portefeuille Brave comme portefeuille par défaut dans les paramètres portefeuille de votre navigateur pour utiliser le portefeuille Brave',
        enable_wallet_extensions: 'Activez l\'extension  MetaMask et définisez le défaut à `préferer les extensions` dans les paramètres portefeuille de votre navigateur pour utiliser le portefeuille Metamask',
        evm_wallets: 'Portefeuilles EVM',
        advanced: 'Avancé',
        continue_on_metamask: 'Continuez avec Metamask',
        text1_native_wallets: 'Portefeuilles natifs pour',
        text2_advanced_users: 'utilisateurs avancés',
        text3_or_to_recover_assets: 'ou pour récuperer des jetons envoyés à une adresse EVM lié à un compte natif',
        copy_to_clipboard: 'Copiez { text } dans le presse-papiers',
        latest_block: 'Dernier Bloc',
        price_sources: 'Données obtenues de Coingecko, CoinMarketCap si disponible sinon des échanges décentralisés présents sur Telos EVM',
        marketcap_sources: 'Données obtenues de Coingecko ou CoinMarketCap',
        usd_marketcap: 'Capitalisation USD',
        usd_price: 'Prix USD',
        usd_value: 'Valeur USD',
        tlos_price: 'Prix TLOS',
        gas_price: 'Prix gaz',
        click_to_expand: 'Cliquez pour étendre',
        click_to_fold: 'Cliquez pour réduire',
        search_evm_failed: 'La recherche d\'une adresse EVM lié au compte natif { search_term } à échoué.',
        search_failed: 'La recherche à échouée, veuillez saisir des mots clés de recherche correctes.',
        add_to_metamask: 'Ajoutez { symbol } à MetaMask',
        tx_hash: 'Transaction',
        block: 'Bloc',
        date: 'Date',
        method: 'Méthode',
        to_interacted_with: 'À',
        value_transfer: 'Valeur / Transfert',
        value: 'Valeur',
        token: 'Jeton',
        unknown_precision: 'Précision inconnue',
        click_to_change_format: 'Clicquez pour changer le format',
        func_exed_based_on_dec_data: 'Fonction executée à partir des données décodés',
        balance: 'Solde',
        error_fetching_balance: 'erreur lors de l\'obtention du solde',
        launch_metamask_dialog_to_add: 'Démarrer le dialogue Metamask pour ajouter{ symbol }',
        search_hints: 'Transaction,Adresse,Bloc',
        no_provider_found: 'Plus d\'un fournisseur de portefeuille est actif, désactivez les fournisseurs en trop. Si cela ne fonctionne toujours pas votre portefeuille EVM n\'est peut être pas supporté.',
        copied: 'Copié',
        copy_to_clipboard_failed: 'La copie dans le presse-papiers à échoué',
        gwei: 'Gwei',
        failed_to_fetch_transactions: 'Erreur lors du chargement des transactions.',
        failed_to_parse_transaction: 'Echec de l\'analyse des données de la transaction. Erreur: { message }',
        executed_based_on_decoded_data: 'Fonction executé à partir des données d\'entrée décodé. Pour les fonctions non identifiés, l\'ID de méthode est affiché à la place.',
        unsupported_token_type: 'Type de jeton non supporté: { tokenType }',
        token_id: 'Id #{ tokenId }',
        status: 'Statut',
        nonce: 'Nonce',
        from: 'De',
        to: 'À',
        approvals: {
            approvals_granted_title: 'Permissions ERC:',
            login_account: 'Veuillez vous connecter à cette addresse à l\'aide de votre portefeuille afin de consulter ses permissions.',
            approval_text: 'Nous allons définir le montant des permissions séléctionés à 0. Ceci requiert une signature avec votre portefeuille.',
            type: 'Type',
            delete: 'Supprimer',
            delete_all: 'Supprimer tout',
            unselect_all: 'Tout déséléctionner',
            cancel: 'Annuler',
            remove_approval: 'Supprimer',
            removal_approval: 'Supprimer la permission',
            unselect_all_approvals: 'Déséléctionner les permissions',
            infinite: 'Infini',
            infinite_tooltip: 'Permission plus grande que la totalité des jetons en existence',
            select: 'Selectionnez la permission',
            unselect: 'Déséléctionner la permission',
            update: 'Mise à jour permission(s)',
            update_description: 'Saisissez le nouveau montant de la permission. Ceci requiert une signature avec votre portefeuille.',
            removal_approvals: 'Supprimer toutes les permissions',
            removal_selected_approvals: 'Supprimer toutes les permissions séléctionnées',
            update_failed: 'Echec lors de la mise à jour de la ou des permissions',
            update_success: 'Permission à {spender} pour {contract} a bien été mise à jour',
            spender: 'Dépensier',
            amount: 'Montant',
        },
        nfts : {
            show_without_metadata: 'Voir les NFTs sans metadata',
            id: 'ID Jeton',
            name: 'Nom',
            collection: 'Collection',
            nfts: 'NFTs',
            contract: 'Contrat NFT',
            metadata: 'Meta',
            minter: 'Cré par',
            owner: 'Propriétaire',
            minted: 'Bloc',
            image: 'Image',
            media: 'Media',
            attributes: 'attribut',
            ipfs: 'Obtenir de IPFS',
            consult_collection: 'Consultez la collection',
            consult_metadata: 'Consultez les metadonnées',
            consult_media: 'Consultez le media',
        },
        holders : {
            show_system_contracts: 'Voir les contrats systèmes',
            holder: 'Détenteur',
            balance: 'Solde',
            telos_supply: 'Parts Telos EVM',
            global_supply: 'Parts globales',
            updated: 'Mis à jour',
        },

        transaction: {
            in: 'dépot',
            out: 'envoi',
            form_from: 'De : ',
            form_to: 'À : ',
            load_error: 'Erreur de chargement des transactions',
            form_token: 'Jeton : ',
            show_short: 'Voir format court',
            show_total: 'Voir le total',
            show_wei: 'Voir en wei',
            value_uint256: 'Valeur (uint256) : ',
            tlos_transfer: 'TLOS Transfer',
            contract_deployed: 'Contrat Deployé',
            native_deposit: 'Dépôt de Telos Natif',
            native_withdraw: 'Transfert à Telos Natif',
            unknown: 'Inconnu',
            contract_deployment: 'Deploiement du contrat',
            no_internal_trxs_found: 'Aucune transaction interne trouvée',
            human_readable: 'Lisible par l\'homme',
            no_logs_found: 'Aucun log trouvé',
            verify_related_contract: 'Vérifiez les contrats relatifs à chaque logs pour voir sa version lisible par l\'homme',
            failed_to_retrieve_contract: 'Impossible de récupérer le contrat à l\'adresse { address }',
        },
        inputs: {
            incorrect_address_array_length: 'Le tableau doit contenir { size } adresses',
            incorrect_booleans_array_length: 'Le tableau doit contenir { size } booléens',
            incorrect_bytes_array_length: 'Le tableau doit contenir { size } bytes',
            incorrect_sigint_array_length: 'Le tableau doit contenir { size } entiers signés',
            incorrect_strings_array_length: 'Le tableau doit contenir { size } chaînes de caractères',
            incorrect_unsigint_array_length: 'Le tableau doit contenir { size } entiers non signés',

            invalid_address_array_string: 'La valeur saisie ne represente pas un tableau d\'adresses',
            invalid_booleans_array_string: 'La valeur saisie ne represente pas un tableau de booléens',
            invalid_bytes_array_string: 'La valeur saisie ne represente pas un tableau de bytes',
            invalid_sigint_array_string: 'La valeur saisie ne represente pas un tableau d\'entiers signés',
            invalid_strings_array_string: 'La valeur saisie ne represente pas un tableau de chaîne de caractères',
            invalid_unsigint_array_string: 'La valeur saisie ne represente pas un tableau de d\'entiers non signés',

            invalid_address_length: 'Une adresse doit faire exactement 40 caractères, sans compter le "0x"',
            invalid_address_start: 'Une adresse doit débuter par 0x',
            invalid_address_characters: 'Cette entrée contient des caractères invalides',
            readonly: 'Ce champ est en lecture seule',
            required: 'Ce champ est requis',
            too_large: 'La valeur maximum pour int{ size } est { max }',
            too_small: 'La valeur minimum pour int{ size } est { min }',
            too_large_pow2: 'La valeur maximum pour int{ size } est 2^{ size } - 1',
            too_small_pow2: 'La valeur minimum pour int{ size } est -(2^{ size }) + 1',
            too_large_unsigint: 'La valeur maximum pour uint{ size } est 2^{ size } - 1',
            no_negative_unsigint: 'La valeur pour uint{ size } ne peut pas être négative',
            invalid_signed_integer: 'Entier signé non valide',
            invalid_unsigint: 'L\'entrée doit être un entier non signé valide',
            str_input_placeholder: '["une valeur", ... , "valeur final"]',
            str_input_hint: 'Les guillemets dans les chaînes de caractères doivent être échappés (\\")',
            address_placeholder: 'Adresse commençant par 0x',
            address_label: '{ label } (adresse)',
            boolean_array_label: '{ label } (bool[{ size }])',
        },
        health: {
            status: 'Statut',
            checked_at: 'Vérifié à',
            task: 'Tâche',
            message: 'Message',
            block_height: 'Bloc',
            latency: 'Latence',
            click_to_change_format: 'Cliquer pour changer de format',
        },
        contract_tab: {
            copy_abi_to_clipboard: 'Copier l\'ABI du contrat dans le presse-papiers',
            enter_amount: 'Séléctionnez un nombre de décimales et saisissez un montant qui sera injecté pour vous dans la fonction en tant que uint256',
            result: 'Résultat',
            view_transaction: 'Voir la transaction',
            code: 'Code',
            read: 'Lire',
            write: 'Ecrire',
            amount: 'Montant',
            value: 'Valeur',
            custom_decimals: 'Decimales personalisés',
            custom: 'Personalisé',
            unverified_contract_source: 'Le code de ce contrat n\'a pas été soumis.',
            click_here: 'Cliquez ici',
            upload_source_files: 'pour envoyer le fichier source et ainsi vérifier votre contrat.  ' +
                'Alternativement, vous pouvez intéragir avec le contrat en utilisant soit l\'ABI détécté soit, si inconnu, un ABI de votre choix:',
            use_erc20_abi: 'Utiliser l\'ABI ERC20',
            use_erc721_abi: 'Utiliser l\'ABI ERC721',
            abi_from_json: 'ABI depuis JSON',
            paste_abi_json_here: 'Coller votre ABI JSON ici',
            abi_json_preview: 'ABI JSON prévisualisation',
            provided_abi_invalid: 'L\'ABI founni n\'est pas valide',
            provided_json_invalid: 'Le JSON fourni n\'est pas valide',
            read_functions: 'Fonctions de lecture',
            write_functions: 'Fonctions de d\'écriture',
            unverified_contract: 'Contract non verifié',
        },
        header: {
            sign_in: 'Connexion',
            sign_out: 'Déconnexion',
            liq_staking: 'Staking Liquide',
            goto_staking: 'Aller au Staking',
            goto_health_monitor: 'aller à la page Moniteur de Santé',
            goto_mainnet: 'Aller au Mainnet',
            goto_testnet: 'Aller au Testnet',
            health_monitor: 'Moniteur de Santé',
            health_status: 'Statut',
            advanced: 'Avancé',
            light_mode: 'Mode Clair',
            dark_mode: 'Mode Sombre',
            address_not_found: 'La recherche d\'une adresse EVM lié à au compte natif { account } a échoué.',
            search_failed: 'La recherche a échoué, veuillez saisir des mots clés de recherche corrects.',
            goto_address_details: 'Voir les détails de l\'adresse',
            copy_address: 'Copier l\'adresse',
            address_copied: 'Adresse copiée',
            search_placeholder: 'Adresse, Tx, Bloc',
            select_language: 'Choisir votre language',
            open_language_switcher: 'Ouvrir le sélécteur de language',
        },
    },
    global: {
        close: 'Fermer',
        toggle_fullscreen: 'Passer en mode plein écran',
        name: 'Nom',
        symbol: 'Symbole',
        show_table: 'Version tableau',
        show_grid: 'Version grille',
        records_per_page: 'Entrées par page:',
        max_decimals_reached: 'Veuillez utiliser au maximum { max } décimales',
        erc20_token: 'Jeton ERC20',
        erc721_token: 'Jeton ERC721',
        sign: 'Signer',
        hours: 'heures',
        wallet_response: 'En attente d\'une réponse de votre portefeuille',
        minutes: 'minute(s)',
        days: 'jour(s)',
        and: 'et',
        unknown: 'inconnu(e)',
        data_behind_by: 'Les données affichés sont en retard de',
        not_synced: 'L\'indexeur n\'est pas synchronisé',
        try_reloading: 'Vous pouvez rafraîchir la page pour réesayer',
        error: 'Erreur',
        async_error_description: 'Désolé ! Un erreur est survenue lors de la requête d\'une ressource. Assurez vous que votre connection internet fonctionne et réessayez. Si cela ne marche toujours pas, contactez nous directement sur nos canaux Telegram.',
        language: 'Language',
        cancel: 'Annuler',
        updated: 'Mis à jour',
        action: 'Action',
        ok: 'Ok',
        expand: 'Voir plus',
        dismiss: 'Rejeter',
        empty_block: 'Le bloc est vide',
        empty_block_description: 'Ce bloc ne comporte aucune transaction. Essayez de consulter un autre bloc',
    },
    layouts: {
        health_status: 'Statut santé',
        stake_telos: 'Stakez vos TLOS',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
};
